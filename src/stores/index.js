import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import momentReducer from "./reducers/moment.reducer";
import eventReducer from "./reducers/event.reducer";

const persistConfig = {
	key: "primary",
	storage,
};

const rootReducer = combineReducers({
	moment: momentReducer,
	event: eventReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
	reducer: persistedReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: false,
		}),
});

export const persistor = persistStore(store);
