import Api from '../index';
import Constants from '../Constants';

// Fetch all Categories
const getCategories = (token: string) => {
  return Api(Constants.CATEGORY, null, 'get', token);
}

export { getCategories };