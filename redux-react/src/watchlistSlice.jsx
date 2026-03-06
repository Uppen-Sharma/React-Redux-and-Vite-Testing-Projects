import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  watchlistIds: [],
};

const watchlistSlice = createSlice({
  name: "watchlist",
  initialState,
  reducers: {
    toggleWatchlist: (state, action) => {
      const movieId = action.payload;
      if (state.watchlistIds.includes(movieId)) {
        state.watchlistIds = state.watchlistIds.filter((id) => id !== movieId);
      } else {
        state.watchlistIds.push(movieId);
      }
    },
  },
});

export const { toggleWatchlist } = watchlistSlice.actions;
export default watchlistSlice.reducer;
