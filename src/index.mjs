import ex from 'express';
import config from '../config.json' assert {type: 'json'};
import { WebhookClient } from 'discord.js';
import { startBot } from './discord/bot.mjs'
const bot = './discord/bot.mjs'
const webhookClient = new WebhookClient({url: config.webhook})
const app = ex();

app.use(ex.urlencoded({
    extends: true
}));

app.get('/', function(req, res) {
    res.sendFile('C:/Users/User/Desktop/Website/multySys/src/pages/index.html')
})

app.get('*', function(req, res) {

});

app.listen(config.port, function(req, res) {
    console.log(config.startupMsg)
    /*webhookClient.send({
        username: 'Multy System - Logger',
        content: `Starting website on port: ${config.port}`
    })*/
});

bot