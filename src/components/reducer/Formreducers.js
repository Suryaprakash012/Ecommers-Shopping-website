import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const Formreducers = createSlice({
  name: 'form',
  initialState,
  reducers: {
    formAdd(state, action) {
      state.push(action.payload);
    },
  },
});

export const { formAdd } = Formreducers.actions;
export default Formreducers.reducer;
