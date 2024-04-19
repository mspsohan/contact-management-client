import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { contactApi } from './contactApi';
import searchReducer from './searchSlice';

export const store = configureStore({
	reducer: {
		[contactApi.reducerPath]: contactApi.reducer,
		search: searchReducer,
	},
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(contactApi.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
	ReturnType,
	RootState,
	unknown,
	Action<string>
>;
