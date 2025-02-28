import { configureStore, combineReducers } from '@reduxjs/toolkit'
import userSlice from "./user/userSlice.js"
import { persistReducer, persistStore} from "redux-persist"
import storage from 'redux-persist/lib/storage'

//used to store and Merges multiple reducers into a single rootReducer.
const rootReducer=combineReducers({
  user:userSlice, //userSlice called as state it is red as user state
});

//Configuring Redux Persist  to automatically save and reload your Redux state to  localStorage even after a page refresh.
//unless Redux state resets when the page reloads.
const persistConfig={
  key:"root", // root like name that the data is deved in localstorege
  storage, //loaclstorge that the data is saved
  version:1,  // when we make the change in our redux state so version manage state migrations or chang from old to new structure by tracks the changes in the Redux state.
};

//keep your Redux state persistent across app reloads with out it redust state rest with it redux state persist or  saved to localStorage
// it provided tow capability 1 Persistence: It saves the Redux state to storage. 2 Rehydration: When the app restarts or refreshes, it restores the saved state, so users don't lose their data (e.g., user login, preferences).
const persistedReducer=persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware:(getDefaultMiddleware)=>getDefaultMiddleware({serializableCheck : false,})//is configuring the middleware for your Redux store. Middleware in Redux is used to intercept actions before they reach the reducer, allowing you to modify or perform additional operations on action
// it give default middleware used by redux this midle ware handle serializability checks  redux allow only serilideble data to be stored to covert to json unless it give warning to nonserilizeble data like function and object  when you make serializableCheck: false ou are telling Redux to skip this check. and you don't want to be warned about it.
});

export const persistor = persistStore(store);