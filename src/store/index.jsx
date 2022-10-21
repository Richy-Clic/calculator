import { configureStore} from '@reduxjs/toolkit';
import calculator from './caculator/reducer'

export default configureStore({
    reducer: {
        calculator: calculator
    }
})