const axios = require('axios')

class Intercom {
    constructor() {
        this.token = process.env.INTERCOM_KEY
        this.apiBase = 'https://api.intercom.io/'
    }

    _authenticatedGet(url) {
        return axios.get(`${this.apiBase}${url}`, {
            headers: {
                "Authorization": `Bearer ${this.token}`
            }
        })
    }

    getConversations(id) {
        return new Promise(async (resolve, reject) => {
            let response = await this._authenticatedGet(`conversations?type=user&open=true&intercom_user_id=${id}`)
            resolve(response)
        })
    }

    getUser(id) {
        return new Promise(async (resolve, reject) => {
            let response = await this._authenticatedGet(`users/${id}`)
            resolve(response)
        })
    }
}

module.exports = Intercom