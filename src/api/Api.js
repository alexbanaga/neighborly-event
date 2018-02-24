const SERVER_URL = "";


class Api {
    static login(userName, password) {
        return fetch(SERVER_URL + 'login?username=' + userName, "&password=" + password, {
            method: 'get',
            credentials: 'include'
        }).then((response) => {
            if(userName=="admin" && password=="admin"){
                return { success: true };
            }
            return { success: false };
            //return response.json();
        }).catch((err) => {
            if(userName=="admin" && password=="admin"){
                return { success: true };
            }
            return { success: false };
        })
    }
}

export default Api;