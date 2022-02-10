
const baseUrl = "https://appblogme.herokuapp.com/"
// const baseUrl = "http://127.0.0.1:8000/"

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

    static FileUpload(body) {
        return fetch(baseUrl + 'api/posts/', {
            'method': 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body)
        }).then(res => res.json())
    }

    static GetData() {
        return fetch(baseUrl + 'api/posts/', {
            'method': 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        }).then(res => res.json())
    }
}