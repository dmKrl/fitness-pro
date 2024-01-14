import { configureStore } from '@reduxjs/toolkit';
import dataReducer from './slices/dataSlices';

const store = configureStore({
    reducer: {
        data: dataReducer,
    },
});

export default store;
