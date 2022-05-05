const gif = require("./commands/gif.js");
const hi = require("./commands/hi.js");

const commands = { hi, gif };

module.exports = async function (msg) {
  if (msg.channel.id == "971649115794575380") {
    let tokens = msg.content.split(" ");
    let command = tokens.shift();

    if (command.charAt(0) == "!") {
      command = command.substring(1);
      commands[command](msg, tokens);
    }
  }
};

// function modeUser(member) {
//   member.roles.add("971455553375195197");
// }

// function deletedMessage(msg) {
//   msg.channel.send(`Хватит блять удалять сообщения, удалил: ${msg.createdAt}`);
// }
