import { createSlice } from "@reduxjs/toolkit";

const filtersInitialState = '';

const filtersSlice = createSlice({
  // Ім'я слайсу
  name: "filter",
  // Початковий стан редюсера слайсу
  initialState: filtersInitialState,
  // Об'єкт редюсерів
  reducers: {
    setFilter(state, action) {
        return action.payload;
    },

  },
});

// Генератори екшенів
export const { setFilter } = filtersSlice.actions;
// Редюсер слайсу
export const filtersReducer = filtersSlice.reducer;