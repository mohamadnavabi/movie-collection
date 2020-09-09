import { createSelector } from 'reselect';

const selectCategory = (state) => state.category;

// All Categories
export const selectCategories = createSelector(
  [selectCategory],
  category => category.categories
)