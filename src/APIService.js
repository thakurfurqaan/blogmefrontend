
// const baseUrl = "https://appblogme.herokuapp.com/"
const baseUrl = "http://127.0.0.1:8000/"

export default class APIService {

    static LoginUser(body) {
        return fetch(baseUrl + 'auth/', {
            'method': 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body)
        }).then(res => res.json())
    }

    static RegisterUser(body) {
        return fetch(baseUrl + 'api/users/', {
            'method': 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body)
        }).then(res => res.json())
    }
}