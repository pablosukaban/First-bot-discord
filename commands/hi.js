const replies = ["Здарова", "Привет", "Лучше не надо", "Съебал"];

module.exports = function (msg, args) {
  const index = Math.floor(Math.random() * replies.length);
  msg.channel.send(replies[index]);
};
