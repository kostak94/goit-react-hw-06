import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filters: "",
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  selectors: {
    selectFilters: (state) => state.filters,
  },
  reducers: {
    changeFilter: (state, { payload }) => {
      state.filters = payload;
    },
  },
});

export const filtersReducer = filtersSlice.reducer;
export const { changeFilter } = filtersSlice.actions;
export const { selectFilters } = filtersSlice.selectors;
