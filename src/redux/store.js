import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import modalReducer from '../redux/Slice/modalSlice';

const reducers = combineReducers({
  modal: modalReducer,
  // user: UserSlice,
  // language: LanguageSlice,
  // game: GamesSlice,
  // withdraw : WithdrawSlice,
  // client: ClientConfigSlice,
});

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
  // Redux Thunk is included by default, so no need to add it here
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"],
      },
    }),
});

export default store;
