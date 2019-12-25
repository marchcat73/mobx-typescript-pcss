import { observable, action } from 'mobx'

import { FieldState } from 'formstate'

/** 
 * Features
 * - Store a list of items (strings) 
 * - Allow maintaining a *current* string as it gets typed
 * - Ability to add this *current* string to the list of items
 * - Add an option to reset the items and the *current* string
 */

class ApplicationState {
  @observable
  items: string[] = [];

  @observable
  currentItem = new FieldState('')

  @action
  addCurrentItem() {
    this.items.push(this.currentItem.value);
    this.currentItem.onChange('');
  }

  @action
  reset() {
    this.items = [];
    this.currentItem.onChange('');
  }
}

export const appState = new ApplicationState();