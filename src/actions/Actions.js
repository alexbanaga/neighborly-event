import Api from '../api/Api';

export function loginSuccess() {
    return { type: 'LOGIN_SUCCESS' };
}
export function loginFailure() {
    return { type: 'LOGIN_FAILURE' };
}

export function login(username, password) {
    return function (dispatch) {
        return Api
            .login(username, password)
            .then(response => {
                if (response.success == true) {
                    dispatch(loginSuccess());
                }
            })
            .catch(error => {
                throw (error);
            });
    };
}