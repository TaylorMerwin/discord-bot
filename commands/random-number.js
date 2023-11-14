import { SlashCommandBuilder } from "discord.js";

export const data = new SlashCommandBuilder()
  .setName("random-number")
  .setDescription("Get a random number between 1 and 100");

export async function execute(interaction) {
  const randomNumber = Math.floor(Math.random() * 100) + 1;
  await interaction.reply(`Your random number is ${randomNumber}`);
}
