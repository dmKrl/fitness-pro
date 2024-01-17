/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    workoutsItem: {
        course: [],
    },
    workoutId: {},
};

const workoutsSlice = createSlice({
    name: 'workout',
    initialState,
    reducers: {
        setWorkoutsItem: (state, action) => {
            state.workoutsItem.course = action.payload;
        },
        setWorkoutId: (state, action) => {
            state.workoutId = action.payload;
        },
    },
});

export const { setWorkoutsItem, setWorkoutId } = workoutsSlice.actions;

export const selectWorkoutsItemCourse = (state) =>
    state.workout.workoutsItem.course;
export const selectWorkoutId = (state) => state.workout.workoutId;
export default workoutsSlice.reducer;
