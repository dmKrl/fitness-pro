/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    workoutsItem: {
        course: [],
    },
};

const workoutsSlice = createSlice({
    name: 'workout',
    initialState,
    reducers: {
        setWorkoutsItem: (state, action) => {
            state.workoutsItem.course = action.payload;
        },
    },
});

export const { setWorkoutsItem } = workoutsSlice.actions;

export const selectWorkoutsItemCourse = (state) =>
    state.workout.workoutsItem.course;

export default workoutsSlice.reducer;
