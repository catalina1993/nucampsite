import { commentsReducer } from "../features/comments/commentsSlice";
import logger from "redux-logger";
import { partnersReducer } from "../features/partners/partnersSlice";
import { promotionsReducer } from "../features/promotions/promotionsSlice";
import { campsitesReducer } from "../features/campsites/campsitesSlice";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    campsites: campsitesReducer,
    comments: commentsReducer,
    partners: partnersReducer,
    promotions: promotionsReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([logger]),
});
