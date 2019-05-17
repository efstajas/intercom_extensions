const axios = require('axios')

class Intercom {
    constructor() {
        this.token = process.env.INTERCOM_KEY
        this.apiBase = 'https://api.intercom.io/'
    }

    _authenticatedRequest(method, url, data) {
        return axios({
            method: method,
            url: `${this.apiBase}${url}`,
            data: data ? data : null,
            headers: {
                "Authorization": `Bearer ${this.token}`
            }
        });
    }

    getConversations(id) {
        return new Promise(async (resolve, reject) => {
            let response = await this._authenticatedRequest('get', `conversations?type=user&open=true&intercom_user_id=${id}`)
            resolve(response)
        })
    }

    getUser(id) {
        return new Promise(async (resolve, reject) => {
            let response = await this._authenticatedRequest('get', `users/${id}`)
            resolve(response)
        })
    }
}

module.exports = Intercom