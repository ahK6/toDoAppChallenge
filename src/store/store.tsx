/**
 * Congfiguración del Store de Redux
 */

import { createStore, applyMiddleware } from "redux";

//Redux-thunk: Permite Usar Action Creators Asíncronos
import ReduxThunk from "redux-thunk";
import AsyncStorage from "@react-native-community/async-storage";

import { persistStore, persistReducer } from "redux-persist";

import reducers from "./indexReducers";

const persistConfig = {
  key: "root",
  version: 0,
  storage: AsyncStorage,
};
const persistedReducer = persistReducer(persistConfig, reducers);
// Redux Store
const store = createStore(
  reducers,
  persistedReducer,
  applyMiddleware(ReduxThunk)
);

let persistor = persistStore(store);

export { store, persistor };
