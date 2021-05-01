import axios from 'axios';
export const apiMain = async () => {
  console.log('log');
  let option = {
    method: 'POST',
    url:
      'http://ec2-3-34-45-66.ap-northeast-2.compute.amazonaws.com:3000/main/main',
    headers: {
      'x-access-token':
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsInVzZXJOYW1lIjoi7Jyg6rSA7JqwIiwiaWF0IjoxNjE5NzgzOTk2LCJleHAiOjE2MTk4NzAzOTYsImlzcyI6ImhhY2tlcnRob24iLCJzdWIiOiJ1c2VySW5mbyJ9.etyNO45lgfYaPrmXSAvnvzB4zNVK2cE2-X2iOghtmRQ',
    },
  };
  const result = await axios(option);
  console.log(result.data);
  return result.data;
};
