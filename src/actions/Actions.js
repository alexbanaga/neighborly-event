import Api from '../api/Api';

export function loginSuccess() {
    return { type: 'LOGIN_SUCCESS' };
}
export function loginFailure() {
    return { type: 'LOGIN_FAILURE' };
}

export function login(access_key) {
    return function (dispatch) {
        return Api
            .login(access_key)
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