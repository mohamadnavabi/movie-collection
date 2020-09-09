import Api from '../index';
import Constants from '../Constants';

const loginUser = (username: string, password: string) => {
  return Api(
    Constants.LOGIN,
    {
      username,
      password
    },
    'post',
    null,
  );
}

export { loginUser };