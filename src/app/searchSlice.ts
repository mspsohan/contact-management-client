import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';

interface SearchState {
	searchTerm: string;
}

const initialState: SearchState = {
	searchTerm: '',
};

const searchSlice = createSlice({
	name: 'search',
	initialState,
	reducers: {
		setSearchTerm: (state, action: PayloadAction<string>) => {
			state.searchTerm = action.payload;
		},
	},
});

export const { setSearchTerm } = searchSlice.actions;
export const selectSearchTerm = (state: RootState) => state.search.searchTerm;
export default searchSlice.reducer;
