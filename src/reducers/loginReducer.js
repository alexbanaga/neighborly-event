const initialState = {
    loggedIn: false
};

export default function leadReducer(state = initialState, action) {
    switch (action.type) {
        case 'LOGIN_SUCCESS':
            return Object.assign({}, state, {
                loggedIn: true
            });
        default:
            return state;
    }
}