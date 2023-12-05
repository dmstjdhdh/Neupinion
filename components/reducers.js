const initialState = {
    globalData: null,
};

const globalReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_GLOBAL_DATA':
            return {
                ...state,
                globalData: action.payload,
            };
        default:
            return state;
    }
};

export default globalReducer;