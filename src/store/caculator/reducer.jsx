import { createSlice} from '@reduxjs/toolkit'

export const calculator = createSlice({
    name: 'values',
    initialState: {
        previousValue: '',
        currentValue: '',
        saveValue: 0,
        operator: ''
    },
    reducers: {

        add: (state, action) => {
console.log(state.currentValue.charAt(state.currentValue.length-1));
            if(state.operator != action.payload) {
                state.currentValue = `${state.currentValue}${action.payload}`
                state.operator = action.payload
            } else if (state.operator === action.payload && state.currentValue.charAt(state.currentValue.length)) {

                state.currentValue = `${state.currentValue}${action.payload}`
            }
        },
        subtract: (state, action) => {
            state.currentValue  = state.currentValue - state.previousValue
            state.previousValue = null
        },
        multiply: (state, action) => {
            state.currentValue  = state.currentValue * state.previousValue
            state.previousValue = null
        },
        typing: (state, action) => {
            state.currentValue = `${state.currentValue}${action.payload}`
        }


    }

})

export const { add, subtract, multiply, typing } = calculator.actions

export default calculator.reducer