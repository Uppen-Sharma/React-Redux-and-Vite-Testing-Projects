import { configureStore } from "@reduxjs/toolkit";
import watchlistReducer from "./watchlistSlice.jsx";

export const store = configureStore({
  reducer: {
    watchlist: watchlistReducer,
  },
});
