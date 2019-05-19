const axios = require('axios')

class Slack {
    constructor() {
        this.channelHook = 'https://hooks.slack.com/services/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'
    }

    postToChannel(message, attachments) {
        console.log(`-- Posting to Slack channel: ${message}`)
        return axios.post(this.channelHook, {
            'text': message,
            'attachments': [attachments],
        },{
            headers: {
                'Content-Type': 'application/json',
            },
        })
    }
}

module.exports = Slack