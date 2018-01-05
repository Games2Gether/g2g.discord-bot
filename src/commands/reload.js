const fs = require('fs');

exports.run = async bot => {
  fs.readdir('./commands', (err, files) => {
    if (err) return console.error(err);

    files.forEach(file => {
      let commandName = file.split('.')[0];
      let commandPath = `./${file}`;
      let commandDefinition = require(commandPath);

      delete require.cache[require.resolve(commandPath)];

      bot.commands[commandName] = commandDefinition;

      if (commandDefinition.help.aliases) {
        commandDefinition.help.aliases.forEach(alias => {
          bot.commands[alias] = commandDefinition;
        });
      }
    });
  });
};

exports.help = {
  name: 'reload',
  category: 'Admin',
  description: 'Reload all commands.',
  role: 'Administrator',
  aliases: ['rl'],
  usage: 'reload',
};
