const axios = require('axios')

class Intercom {
    constructor() {
        this.token = process.env.INTERCOM_KEY
        this.adminId = process.env.INTERCOM_ADMIN_ID
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
        console.log(`-- Getting conversations for user ${id}`)
        return new Promise(async (resolve, reject) => {
            let response = await this._authenticatedRequest('get', `conversations?type=user&open=true&intercom_user_id=${id}`)
            resolve(response.data.conversations)
        })
    }

    ensureOpenConversations(conversations) {
        return conversations.filter(c => c.open && c.state === 'open' && c.assignee.type != 'nobody_admin')
    }

    addNoteOnConversation(id, note) {
        console.log(`-- Writing note to conversation ${id}`)
        return this._authenticatedRequest('post', `conversations/${id}/reply`, {
            body: note,
            type: 'admin',
            message_type: 'note',
            admin_id: this.adminId
        })
    }

    getUser(id) {
        console.log(`-- Getting intercom user ${id}`)
        return new Promise(async (resolve, reject) => {
            let response = await this._authenticatedRequest('get', `users/${id}`)
            resolve(response.data)
        })
    }
}

module.exports = Intercom