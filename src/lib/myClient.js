import axios from 'axios';
const myClient = token => {
  const client = axios.create();
  client.defaults.baseURL =
    'http://ec2-3-34-45-66.ap-northeast-2.compute.amazonaws.com:3000';
  client.defaults.headers.common['x-access-token'] = token;
  return client;
};

export default myClient;
