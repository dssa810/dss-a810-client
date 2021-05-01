import axios from 'axios';
//Mobx Repository는 Ajax로 데이터를 가져오는 부분.
//데이터를 가져오는 부분도 Layer를 나누어 구성하는 것을 권장.
//비즈니스 로직 분리의 이점
//Test 코드 작성 시 Mocking이 용이 장점

export const login = async (email, password) => {
  let option = {
    method: 'POST',
    url:
      'http://ec2-3-34-45-66.ap-northeast-2.compute.amazonaws.com:3000/users/login',
    data: {
      email: email,
      password: password,
    },
  };
  const result = await axios(option);
  return result.data;
};
