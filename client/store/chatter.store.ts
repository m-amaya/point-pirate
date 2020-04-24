import { filter } from 'ramda';
import { BehaviorSubject, interval, merge, Subject, Subscription } from 'rxjs';
import { map, scan } from 'rxjs/operators';
import { generateChatterText } from 'utils/lorem';
import { v4 as uuid } from 'uuid';
import { User, UserStore } from './user.store';

export interface Post {
  id: string;
  username: string;
  timestamp: number;
  content: string;
  count: number;
}

const createUserPosts = ({ postFrequency, username }: User) =>
  interval(postFrequency).pipe(
    map<number, Post>((idx) => ({
      id: uuid(),
      username,
      timestamp: Date.now(),
      content: generateChatterText(),
      count: idx + 1,
    })),
  );

const isLessThan30Seconds = ({ timestamp }: Post) =>
  Date.now() - timestamp < 30000;

const scanPosts = scan<Post, Post[]>(
  (list, post) => [post, ...filter(isLessThan30Seconds, list)],
  [],
);

export class ChatterStore {
  private user: UserStore;

  private postsSub: Subscription;

  private newPost$ = new Subject<Post>();

  public postsForView$ = new BehaviorSubject<Post[]>([]);

  public likedPostsForView$ = new BehaviorSubject<Record<string, Post>>({});

  public constructor(user: UserStore) {
    this.user = user;
    this.postsSub = this.createPostsStream().subscribe(this.postsForView$);
  }

  public send = (content: string) =>
    this.newPost$.next({
      id: uuid(),
      username: this.user.session.username,
      timestamp: Date.now(),
      content,
      count: 0,
    });

  private createPostsStream = () =>
    merge(...this.user.collection.map(createUserPosts), this.newPost$).pipe(
      scanPosts,
    );

  public like = (post: Post, record: Record<string, Post>) =>
    this.likedPostsForView$.next({ ...record, [post.id]: post });

  public unlike = (id: string, record: Record<string, Post>) => {
    delete record[id];
    this.likedPostsForView$.next({ ...record });
  };

  public clear = () => {
    this.postsForView$.next([]);
    this.postsSub.unsubscribe();
    this.postsSub = this.createPostsStream().subscribe(this.postsForView$);
    this.likedPostsForView$.next({});
  };
}
