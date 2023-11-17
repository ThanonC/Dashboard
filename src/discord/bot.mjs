import { Client, GatewayIntentBits } from 'discord.js';
const client = new Client({ intents: [GatewayIntentBits.Guilds] });
import config from '../../config.json' assert {type: 'json'};
import { Interaction } from 'eris';

export function startBot() {
    client.login(config.token)
    console.log(`Discord Bot > Starting up as ${client.username}`)
}

client.on('guildMemberAdd', async Interaction => {
    Interaction.send(`Welkomme ${Interaction.user.username} on ${Interaction.guild.name}`)
})