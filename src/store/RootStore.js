import {AuthStore} from './AuthStore';
import {MainStore} from './MainStore';

export class RootStore {
  authStore;
  mainStore;

  constructor() {
    this.authStore = new AuthStore(this);
    this.mainStore = new MainStore(this);
  }
}
