const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));

module.exports = async function (msg, args) {
  let keywords = "discord rules";

  if (args.length > 0) {
    keywords = args.join(" ");
  }

  let url = `https://g.tenor.com/v1/search?q=${keywords}&key=${process.env.TENOR_KEY}&contentfilter=off`;
  let response = await fetch(url);
  let json = await response.json();
  let index = Math.floor(Math.random() * json.results.length);
  msg.channel.send(json.results[index].url);
  msg.channel.send(`Гифка из Tenor: ${keywords}`);
};
