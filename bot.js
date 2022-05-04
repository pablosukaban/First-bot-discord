require("dotenv").config();

const { Client, Intents } = require("discord.js");

const BOT_PREFIX = "!";
const COOL_ROLE_ME = "cool-role-me";

const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
  partials: ["MESSAGE"],
});

client.on("ready", () => console.log("Bot is ready and running"));

client.on("message", (msg) => {
  if (msg.content.toLowerCase().includes("дот")) {
    msg.react("💩");
  }
  if (msg.content === `${BOT_PREFIX}${COOL_ROLE_ME}`) {
    modeUser(msg.member);
  }
});

client.on("messageDelete", (msg) => {
  msg.channel.send(`Хватит блять удалять сообщения, удалил: ${msg.createdAt}`);
});

function modeUser(member) {
  member.roles.add("971455553375195197");
}

client.login(process.env.BOT_TOKEN);
