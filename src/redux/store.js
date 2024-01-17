import { configureStore } from '@reduxjs/toolkit';
import dataReducer from './slices/dataSlices';
import workoutReducer from './slices/workoutsSlices';

const store = configureStore({
    reducer: {
        data: dataReducer,
        workout: workoutReducer,
    },
});

export default store;
