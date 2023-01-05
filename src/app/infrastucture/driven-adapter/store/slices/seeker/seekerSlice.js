import { createSlice } from '@reduxjs/toolkit';

export const seekerSlice = createSlice({
    name: 'products',
    initialState: {
        page: 0,
        products: [],
        isLoading: false,
    },
    reducers: {
        startLoadingSeeker: (state, /* action */ ) => {
            state.isLoading = true;
        },
        setSeeker: ( state, action ) => {
            state.isLoading = false;
            state.page = action.payload.page;
            state.products = action.payload.products;
        }
    }
});


// Action creators are generated for each case reducer function
export const { startLoadingSeeker, setSeeker } = seekerSlice.actions;