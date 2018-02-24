const SERVER_URL = "";


class Api {
    static login(userName, password) {
        return fetch(SERVER_URL + 'login?username=' + userName, "&password=" + password, {
            method: 'get',
            credentials: 'include'
        }).then((response) => {
            return response.json();
        }).catch((err) => {
            return err;
        })
    }
}