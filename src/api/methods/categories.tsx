import Api from '../index';
import Constants from '../Constants';

const getCategories = (token: string) => {
  return Api(
    Constants.CATEGORY,
    null,
    'get',
    token,
  );
}

export { getCategories };