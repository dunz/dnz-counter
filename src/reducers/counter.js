import * as types from '../actions/ActionTypes';

const initialState = {
    number: 0,
    dubobject: {
        a: 1,
        b: 2
    }
};

export default function counter (state = initialState, action) {
    switch(action.type) {
        case types.INCREMENT:
            return {
                ...state,
                number: state.number + 1,
                dubobject : {
                    ...state.dubobject,
                    b: 3
                }
            }

        case types.DECREMENT:
            return {
                ...state,
                number: state.number - 1,
            }
            
        default:
            return state;
        
    }
};