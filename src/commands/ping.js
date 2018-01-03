exports.run = async (bot, message) => {
  const ping = await message.channel.send('Ping?');
  ping.edit(`Pong! Latency is ${ping.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(bot.ping)}ms`);
};

exports.help = {
  name: 'ping',
  category: 'Miscelaneous',
  description: 'It... like... pings. Then Pongs. And it\'s not Ping Pong.',
  usage: 'ping',
};
