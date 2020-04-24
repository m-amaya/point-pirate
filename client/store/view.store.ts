import { BehaviorSubject } from 'rxjs';

export type View = 'home' | 'browse' | 'alerts' | 'profile';
export type ShowViewFn = (view: View) => void;

export class ViewStore {
  public currentView$ = new BehaviorSubject<View>('home');

  public showView = (view: View) => this.currentView$.next(view);
}
