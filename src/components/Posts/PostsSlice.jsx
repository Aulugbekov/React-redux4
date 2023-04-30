import {
  createAsyncThunk,
  createSlice,
  configureStore,
} from "@reduxjs/toolkit";

export const fetchPosts = createAsyncThunk(
  "posts/fetchPosts",
  async function (id) {
    const url = id ? `http://localhost:3004/posts/${id}` : 'http://localhost:3004/posts/';
   const response =await fetch(url);
   const data = await response.json()
    console.log(response);

    return data;
  }
);

const postsSlice = createSlice({
  name: "name",
  initialState: {
    posts: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.posts = action.payload;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

const store = configureStore({
  reducer: {
    posts: postsSlice.reducer,
  },
});

export default store;
