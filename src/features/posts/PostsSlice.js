import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { getPosts } from "./postsApi"

const initialState = {
    isLoading: false,
    isError: false,
    posts: [],
    error: null
}

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
    const posts = await getPosts()
    return posts;
})

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.
            addCase(fetchPosts.pending, (state) => {
                state.isError = false;
                state.isLoading = true;
            })
            .addCase(fetchPosts.fulfilled, (state, action) => {
                state.isLoading = false;
                state.posts = action.payload;
            })
            .addCase(fetchPosts.rejected, (state, action) => {
                state.isError = true;
                state.isLoading = false;
                state.error = action.error?.message

            })
    }

})
export default postsSlice.reducer