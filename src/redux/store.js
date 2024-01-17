import { configureStore } from '@reduxjs/toolkit';
import dataReducer from './slices/dataSlices';
import workoutReducer from './slices/workoutsSlices';
import progressReducer from './slices/progressSlice';

const store = configureStore({
    reducer: {
        data: dataReducer,
        workout: workoutReducer,
        progress: progressReducer,
    },
});

export default store;
