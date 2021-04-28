import {observable} from 'mobx';
class MainStore {
  @observable isLoading = false;
  @observable email = '';
  @observable password = '';

  setIsLoading = (isLoading) => {
    this.isLoading = isLoading;
  }
  setEmail = (email) => {
    console.log('setEmail', email)
    this.email = email;
  }
  setPassword = (password) => {
    console.log('setPassword', password)
    this.password = password;
  }


}

export default new MainStore();
