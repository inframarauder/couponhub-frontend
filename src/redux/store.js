import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

const production = process.env.NODE_ENV === "production";
const initialState = {};

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = production
  ? createStore(persistedReducer, initialState, applyMiddleware(thunk))
  : createStore(
      persistedReducer,
      initialState,
      composeWithDevTools(applyMiddleware(thunk))
    );

const persistor = persistStore(store);

export { store, persistor };
