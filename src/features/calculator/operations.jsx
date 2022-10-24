import { createSlice, current} from '@reduxjs/toolkit'

const make_operation = (values, operator) => {
    switch(operator) {
        case '+':
            return parseFloat(values[0]) + parseFloat(values[1]);

        case '-':
            return parseFloat(values[0]) - parseFloat(values[1]);

        case 'x':
            return parseFloat(values[0]) * parseFloat(values[1]);

        case '/':
            return parseFloat(values[0]) / parseFloat(values[1]);
    }
}

const getResult = () => {

}

export const operations = createSlice({
    name: 'operations',
    initialState: {
        historyValue: '',
        currentValue: '',
        arrValues: [],
        operator: '',
    },
    reducers: {

        typing: (state, action) => {


            if(isNaN(action.payload) && action.payload != '.') {
                //Typing operator
                
                if(!state.operator) {
                    state.operator = action.payload;
                    state.arrValues.push(state.currentValue);
                    //check if history can be affected
                    if(state.arrValues.length == 2) {
                        // make operation
                        let result = make_operation(state.arrValues, state.historyValue.charAt(state.historyValue.length -1));
                        state.currentValue = result
                        state.arrValues = [result]
                    }
                    state.historyValue += `${state.currentValue}${state.operator}`;

                } else {
                    state.operator = action.payload;
                    let history = state.historyValue.slice(0, state.historyValue.length -1);
                    state.historyValue = `${history}${state.operator}`;
                }
                
            } else if(!isNaN(action.payload) || action.payload === '.') {
                //typing number or dot
                if(state.operator) {
                    state.operator = '';
                    state.currentValue = '';
                }
                if(action.payload === '.' && !state.currentValue.includes('.')) {
                    state.currentValue += action.payload;
                } else if (!isNaN(action.payload)) state.currentValue += action.payload;
            }
            
        },

        result: state => {
            state.arrValues.push(state.currentValue)
            if(state.arrValues.length == 2) {
                let operator = state.historyValue.slice(-1);
                let result = make_operation(state.arrValues, operator);
                state.currentValue = result;
                state.historyValue = ''
                state.arrValues = []
            }
        },

        clearAll: state => {
            state.currentValue = '';
            state.historyValue = '';
        },

        clearCurrentValue: state => {
            state.currentValue = '';
        },

        deleteChar: state => {
            if(state.currentValue.length > 0) state.currentValue = state.currentValue.slice(0, -1)
        }
       


    }

})

export const { typing, result, clearAll, clearCurrentValue, deleteChar } = operations.actions
export default operations.reducer