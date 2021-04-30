import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios';
import {action, makeObservable, observable} from 'mobx';
import {mainApi} from '../repos/mainRepo';

class Main {
  point;
  missions;
  choice;

  constructor(point, missions, choice) {
    this.point = point;
    this.missions = missions;
    this.choice = choice;
  }
}

export class MainStore {
  main = {
    point: 0,
    missions: [],
    choice: [],
  };

  rootStore;
  constructor(root) {
    makeObservable(this, {
      main: observable,
      mainApi: action,
    });
    //어노테이션의 사용은 이후 Mobx 에서는 지양하는 사용법 // 위와 같은 방법으로
    this.rootStore = root;
  }

  mainApi() {
    let option = {
      method: 'POST',
      url:
        'http://ec2-3-34-45-66.ap-northeast-2.compute.amazonaws.com:3000/main/main',
      headers: {
        'x-access-token':
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsInVzZXJOYW1lIjoi7Jyg6rSA7JqwIiwiaWF0IjoxNjE5NzgzOTk2LCJleHAiOjE2MTk4NzAzOTYsImlzcyI6ImhhY2tlcnRob24iLCJzdWIiOiJ1c2VySW5mbyJ9.etyNO45lgfYaPrmXSAvnvzB4zNVK2cE2-X2iOghtmRQ',
      },
    };
    axios(option).then(res => {
      console.log(res.data);
      this.main = res.data;
    });
  }
}
