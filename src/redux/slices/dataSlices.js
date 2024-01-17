/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    dataCourses: [],
};

const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        setDataCourses: (state, action) => {
            state.dataCourses = action.payload;
        },
    },
});

export const { setDataCourses } = dataSlice.actions;

export const selectDataCourses = (state) => state.data.dataCourses;

export default dataSlice.reducer;
