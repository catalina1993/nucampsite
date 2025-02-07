import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { baseUrl } from "../../app/shared/baseUrl";
import { mapImageURL } from "../../utils/mapImageURL";

export const fetchCampsites = createAsyncThunk(
  "campsites/fetchCampsites",
  async () => {
    const response = await fetch(baseUrl + "campsites");
    if (!response.ok) {
      return Promise.reject("Unable to fetch, status: " + response.status);
    }
    const data = await response.json();
    return data;
  }
);

const initialState = {
  campsitesArray: [],
  isLoading: true,
  errMsg: "",
};

const campsitesSlice = createSlice({
  name: "campsites",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCampsites.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchCampsites.fulfilled, (state, action) => {
        state.isLoading = false;
        state.errMsg = "";
        state.campsitesArray = mapImageURL(action.payload);
      })
      .addCase(fetchCampsites.rejected, (state, action) => {
        state.isLoading = false;
        state.errMsg = action.error ? action.error.message : "Fetch failed";
      });
  },
});

export const campsitesReducer = campsitesSlice.reducer;

export const selectAllCampsites = (state) => state.campsites.campsitesArray;

export const selectCampsiteById = (id) => (state) =>
  state.campsites.campsitesArray.find(
    (campsite) => campsite.id === parseInt(id)
  );

export const selectFeaturedCampsite = (state) =>
  state.campsites.campsitesArray.find((campsite) => campsite.featured);
