import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { baseUrl } from "../../app/shared/baseUrl";

export const fetchComments = createAsyncThunk(
  "comments/fetchComments",
  async () => {
    const response = await fetch(baseUrl + "comments");
    if (!response.ok) {
      return Promise.reject("Unable to fetch, status: " + response.status);
    }
    return await response.json();
  }
);

export const postComment = createAsyncThunk(
  "comments/postComment",
  async (comment, { dispatch }) => {
    try {
      const response = await fetch(baseUrl + "comments", {
        method: "POST",
        body: JSON.stringify(comment),
        headers: { "Content-Type": "application/json" },
      });

      if (!response.ok) {
        return Promise.reject(
          "Failed to post comment, status: " + response.status
        );
      }

      const data = await response.json();
      dispatch(addComment(data)); 
      return data;
    } catch (error) {
      return Promise.reject(error.message);
    }
  }
);

const initialState = {
  commentsArray: [],
  isLoading: true,
  errMsg: "",
};

const commentsSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {
    addComment: (state, action) => {
      state.commentsArray.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchComments.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchComments.fulfilled, (state, action) => {
        state.isLoading = false;
        state.errMsg = "";
        state.commentsArray = action.payload;
      })
      .addCase(fetchComments.rejected, (state, action) => {
        state.isLoading = false;
        state.errMsg = action.error.message;
      })
      .addCase(postComment.rejected, (state, action) => {
        alert(
          "Your comment could not be posted\nError: " + action.error.message
        );
      });
  },
});

export const commentsReducer = commentsSlice.reducer;
export const { addComment } = commentsSlice.actions;

export const selectCommentsByCampsiteId = (campsiteId) => (state) =>
  state.comments.commentsArray?.filter(
    (comment) => comment.campsiteId === Number(campsiteId)
  ) || [];
