import {
  faBug,
  faHippo,
  faRocket,
  faSeedling,
} from '@fortawesome/free-solid-svg-icons';
import { Props as FontAwesomeProps } from '@fortawesome/react-fontawesome';
import { indexBy } from 'ramda';

export interface User {
  username: string;
  icon: FontAwesomeProps['icon'];
  color: string;
  postFrequency: number;
}

const USER_COLLECTION: User[] = [
  {
    username: 'mamaya',
    icon: faHippo,
    color: '#03A9F4',
    postFrequency: 3000,
  },
  {
    username: 'AwardsDarwin',
    icon: faSeedling,
    color: '#4CAF50',
    postFrequency: 5000,
  },
  {
    username: 'iamdeveloper',
    icon: faBug,
    color: '#FF9800',
    postFrequency: 3000,
  },
  {
    username: 'CommitStrip',
    icon: faRocket,
    color: '#E91E63',
    postFrequency: 5000,
  },
];

export class UserStore {
  public collection: User[];

  public session: User;

  public constructor() {
    this.collection = USER_COLLECTION;
    this.session = USER_COLLECTION[0];
  }

  public get byUsername() {
    return indexBy((user) => user.username, this.collection);
  }
}
