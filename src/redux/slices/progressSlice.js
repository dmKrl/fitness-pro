/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    results: [0, 0, 0, 0, 0],
    showModal: false,
    showWorkout: true,
};

const progressSlice = createSlice({
    name: 'progress',
    initialState,
    reducers: {
        setResultss: (state, action) => {
            state.results = action.payload;
        },
        setShowModal: (state, action) => {
            state.showModal = action.payload;
        },
        setShowWorkout: (state, action) => {
            state.showWorkout = action.payload;
        },
    },
});

export const { setResultss, setShowModal, setShowWorkout } =
    progressSlice.actions;

export const selectorResults = (state) => state.progress.results;
export const selectorShowModal = (state) => state.progress.showModal;
export const selectorShowWorkout = (state) => state.progress.showWorkout;

export default progressSlice.reducer;
