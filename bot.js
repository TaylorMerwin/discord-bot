import { Client, Events, GatewayIntentBits } from 'discord.js';
import { config } from 'dotenv';
import * as randomnumber from './commands/random-number.js';
config();

const client = new Client({
  intents: [GatewayIntentBits.Guilds],
});

function readyDiscord() {
  console.log(client.user.tag + ' is Ready!');
}

async function handleInteraction(interaction) {
  if (!interaction.isCommand()) return;
  if (interaction.commandName === 'random-number') {
    await randomnumber.execute(interaction);
  }
}

client.once(Events.ClientReady, readyDiscord);
client.login(process.env.TOKEN);

client.on(Events.InteractionCreate, handleInteraction);
