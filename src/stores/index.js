import { observable, computed } from 'mobx';

export default class Store {
  @observable firstName: null;
  @observable lastName: null;

  constructor(first, last) {
    this.firstName = first;
    this.lastName = last;
  }

  @computed get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}
