const SERVER_URL = "";


class Api {
    static login(access_key) {
        return fetch(SERVER_URL + 'login?access_key=' + access_key, {
            method: 'get',
            credentials: 'include'
        }).then((response) => {
            if (access_key == "admin") {
                return { success: true };
            }
            return { success: false };
            //return response.json();
        }).catch((err) => {
            if (access_key == "admin") {
                return { success: true };
            }
            return { success: false };
        })
    }
}

export default Api;
