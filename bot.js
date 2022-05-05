const dotenv = require("dotenv");
const { Client, Intents } = require("discord.js");

const YA_ID = "368078678866788353";
const MAXIM_BRO_ID = "281378098627477504";

dotenv.config();

const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
  partials: ["MESSAGE"],
});

client.once("ready", () => console.log("Bot is ready and running"));

const commandHandler = require("./commands");

client.on("messageCreate", commandHandler);

client.login(process.env.BOT_TOKEN);
