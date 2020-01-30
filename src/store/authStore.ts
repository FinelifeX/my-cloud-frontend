import { action, computed, observable } from 'mobx';

class AuthStore {
  @observable
  profile: {} | null = {};

  @action
  authenticate(profile: any): void {
    this.profile = profile;
  }

  @action
  logout(): void {
    this.profile = null;
  }

  @computed
  get isAuth(): boolean {
    return !!this.profile;
  }
}

export const authStore = new AuthStore();
