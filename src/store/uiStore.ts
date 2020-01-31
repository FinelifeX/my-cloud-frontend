import { action, computed, observable } from "mobx";

class UiStore {
  @observable
  actions: Set<string> = new Set();

  @action
  addLoading(actionName: string): void {
    this.actions.add(actionName);
  }

  @action
  endLoading(actionName: string): void {
    this.actions.delete(actionName);
  }

  @computed
  get isLoading(): boolean {
    return this.actions.size > 0;
  }
}

export const uiStore = new UiStore();
