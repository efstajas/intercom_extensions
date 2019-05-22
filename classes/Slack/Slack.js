const axios = require('axios')

class Slack {
    constructor() {
        this.channelHook = process.env.SLACK_CHANNEL_HOOK
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