import { action, computed, observable } from "mobx";

const isMock = true;

class AuthStore {
  @observable
  profile: {} | null = null;

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
    return isMock || !!this.profile;
  }
}

export const authStore = new AuthStore();
