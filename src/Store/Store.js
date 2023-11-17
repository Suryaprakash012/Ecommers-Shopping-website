import { configureStore } from "@reduxjs/toolkit";
import Formreducers from "../components/reducer/Formreducers";

export const store = configureStore({
  reducer: {
    form: Formreducers,
  },
});
