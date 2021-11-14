import {authorizeThunk} from "./authorize-reducer";

let SET_INITIALIZE = "SET-INITIALIZE";

let initialState = {
    initialized: false
};

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case(SET_INITIALIZE): {
            return {
                ...state,
                initialized: action.initialized
            }
        }
        default:
            return state;
    }
};

export const setInitializeAC = () => {
    return {
        type: SET_INITIALIZE,
        initialized: true
    };
};
export const setInitializeThunk = () => (dispatch) => {
    let dispatchAuth = dispatch(authorizeThunk());
    dispatchAuth.then(() => {
        dispatch(setInitializeAC());
    })
}

export default appReducer;