import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";

const initialState = {
  value: JSON.parse(localStorage.getItem("follow")) || [],
};

const followSlice = createSlice({
  name: "follow",
  initialState,
  reducers: {
    like: (state, action) => {
      let index = state.value.findIndex(
        (product) => product.id === action.payload.id
      );
      if (index < 0) {
        state.value = [...state.value, action.payload];
        localStorage.setItem("follow", JSON.stringify(state.value));
      } else {
        state.value = state.value.filter(
          (product) => product.id !== action.payload.id
        );
        localStorage.setItem("follow", JSON.stringify(state.value));
      }
    },
  },
});

export const { like } = followSlice.actions;
export default followSlice.reducer;
