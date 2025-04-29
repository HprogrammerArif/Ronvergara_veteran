// src/features/categorySlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedCategories: [], // Initialize as an empty array
};

const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    addCategoryByIssue: (state, action) => {
      const issue = action.payload;
      const category = categoryMap[issue] || 'Other';

      if (!state.selectedCategories.includes(category)) {
        state.selectedCategories.push(category);
      }
    },

    removeCategoryIfNoIssuesLeft: (state, action) => {
      const { uncheckedIssue, stillCheckedIssues } = action.payload;

      const category = categoryMap[uncheckedIssue] || 'Other';

      // Check if any issue from this category is still checked
      const stillHasIssueInSameCategory = stillCheckedIssues.some((issue) => {
        return categoryMap[issue] === category;
      });

      if (!stillHasIssueInSameCategory) {
        // Remove category
        state.selectedCategories = state.selectedCategories.filter(
          (c) => c !== category
        );
      }
    },

    resetCategories: (state) => {
      state.selectedCategories = [];
    },
  },
});

export const { addCategoryByIssue, removeCategoryIfNoIssuesLeft, resetCategories } = categorySlice.actions;
export default categorySlice.reducer;
