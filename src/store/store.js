import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { messagesReduser } from "./slices/messages/messagesSlice";
import { txtReduser }  from "./slices/txt/txtSlice"

import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const rootReducer = combineReducers({
    txt: txtReduser,
    messages: messagesReduser
})

const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
    reducer : persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
})


export const persistor = persistStore(store)

export default store






// import {combineReducers, createStore} from "redux"
// import { initialMessages,messagesReduser } from "./slices/messages/messagesSlice"
// import { initialTxt,txtReduser } from "./slices/txt/txtSlice"

// const store = createStore (combineReducers( {
//     txt: txtReduser,
//     messages:messagesReduser

// }), {
//     txt: initialTxt,
//     messages:initialMessages
// })
// export default store