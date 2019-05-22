# Grover Intercom Extensions

This is a small REST server that receives intercom events as a webhook at /events and performs the following: 

- Post an event notification including metadata to a Slack channel.
- Add a note on open Intercom conversations with the user that lets service agents know about the user's actions.

## .env config

Supply the following: 

```
INTERCOM_KEY=<intercom app access key>
INTERCOM_ADMIN_ID=<id of the admin adding notes to conversations>
SLACK_CHANNEL_HOOK=<channel hook URL for the notification channel>
```

## Install

`npm install`

## Run

`npm run start`