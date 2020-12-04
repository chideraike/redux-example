import * as actionTypes from '../actions';

const initialState = {
    persons: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_PERSON:
            return {
                ...state,
                persons: state.persons.concat({
                    id: Math.random(),
                    name: action.personData.name,
                    age: action.personData.age
                })
            }
        case actionTypes.DELETE_PERSON:
            const updatedArray = state.persons.filter(person => person.id !== action.personElId);
            return {
                ...state,
                persons: updatedArray
            }
        default:
            return state;
    }
};

export default reducer;