exports.run = async (bot, message) => {
  await message.channel.send(`/me wave at ${message.author.username}.`);
};

exports.help = {
  name: 'wave',
  category: 'Miscelaneous',
  description: 'It... like... waves.',
  usage: 'wave',
};
