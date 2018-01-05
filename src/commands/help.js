exports.run = async (bot, message, args) => {
  if (!args[0]) {
    // Display commands list
  }

  let command = bot.commands[args[0]];

  if (!command) {
    // Unknown command
  } else {
    let help = `= ${command.help.name} =\n`;

    help += `${command.help.description}\n`;
    help += `usage:: ${bot.config.prefix}${command.help.usage}\n`;

    if (command.help.aliases && command.help.aliases.length) {
      help += `aliases:: ${command.help.aliases.join(' ')}\n`;
    }

    if (command.help.role) {
      help += `require ${command.help.role} role\n`;
    }

    help += `= ${command.help.name} =`;

    message.channel.send(help, { code: 'asciidoc' });
  }
};

exports.help = {
  name: 'help',
  category: 'System',
  description: 'Displays all the available commands for your permission level.',
  usage: 'help [command]',
  aliases: ['h'],
};
