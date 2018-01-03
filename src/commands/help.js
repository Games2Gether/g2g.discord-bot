exports.run = async (bot, message, args) => {
  if (!args[0]) {
    // Display commands list
  }

  let command = bot.commands[args[0]];

  if (!command) {
    // Unknown command
  } else {
    message.channel.send(`= ${command.help.name} = \n${command.help.description}\nusage:: ${command.help.usage}\n= ${command.help.name} =`, { code: 'asciidoc' });
  }
};

exports.help = {
  name: 'help',
  category: 'System',
  description: 'Displays all the available commands for your permission level.',
  usage: 'help [command]',
};
