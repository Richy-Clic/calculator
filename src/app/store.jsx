import { configureStore} from '@reduxjs/toolkit';
import operations from '../features/calculator/operations'

export const store = configureStore({
    reducer: {
        calculator: operations
    }
})