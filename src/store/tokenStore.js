import {observable} from 'mobx';
class TokenStore {
  @observable token = '';

  setToken = (token) => {
    console.log('setToken', token);
    this.token = token;
  }

}

export default new TokenStore();
