import Api from '../index';
import Constants from '../Constants';

// User Login Authentication
const loginUser = (username: string, password: string) => {
  return Api(Constants.LOGIN, { username, password }, 'post', null);
}

export { loginUser };