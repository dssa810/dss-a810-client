import axios from 'axios';
import {action, makeObservable, observable} from 'mobx';
import {login} from '../repos/login';

class Auth {
  userId;
  userToken;
  userName;

  constructor(userId, userToken, userName) {
    this.userId = userId;
    this.userToken = userToken;
    this.userName = userName;
  }
}

export class AuthStore {
  rootStore;
  user = {
    userName: 'init',
    userToken: 'init',
    userId: 0,
  };
  testList = [];

  //전체 데이터를 사용하기 쉽게 하기위하여 루트 스토어에 등록
  constructor(root) {
    makeObservable(this, {
      user: observable,
      test: action,
    });
    //어노테이션의 사용은 이후 Mobx 에서는 지양하는 사용법 // 위와 같은 방법으로
    this.rootStore = root;
  }
  setUser(userId, userName, userToken) {}
  setList(userList) {
    this.userList = userList;
  }
  test() {
    axios.get('http://jsonplaceholder.typicode.com/users').then(res => {
      console.log(res.data);
      this.setList(res.data);
    });
  }
}
