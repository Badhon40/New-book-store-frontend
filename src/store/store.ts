import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query/react";// defaults to localStorage for web
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, REGISTER } from 'redux-persist';
import { userReducers } from "./slice/userSlice";
import { api } from "./api";


// Persist configuration User Data

const userPersistConfig = {
    key: "user",
    storage,
    whiteList:['user', 'isEmailVerified', 'isLoggedIn']
};


// wrap the reducers with persistReducer

const persistedUserReducer = persistReducer(userPersistConfig, userReducers);                      


export const store = configureStore({
    reducer : {
        [api.reducerPath]: api.reducer, //rtk query reducer
        user: persistedUserReducer, // persisted user reducer
    },
    middleware : (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, REGISTER],
            },
        }).concat(api.middleware), //rtk query middleware
    


});


setupListeners(store.dispatch); //rtk query listeners

export const persistor = persistStore(store); //persistor for the store
export type RootState = ReturnType<typeof store.getState>; //root state type
export type AppDispatch = typeof store.dispatch; //dispatch type

