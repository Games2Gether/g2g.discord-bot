const fs = require('fs');
const path = require('path');
const discord = require('discord.js');
const bot = new discord.Client();

const environmentConfigPath = [__dirname, 'config', `${process.env.ENVIRONMENT}.json`].join(path.sep);

bot.commands = require('./commands');
bot.config = require('./config/default.json');

if (fs.existsSync(environmentConfigPath)) {
  Object.assign(bot.config, require(environmentConfigPath));
}

bot.on('ready', () => {
  console.warn(`Bot has started, with ${bot.users.size} users, in ${bot.channels.size} channels of ${bot.guilds.size} guilds.`);
  bot.user.setGame(`on ${bot.guilds.size} servers`);
});

bot.on('message', async message => {
  if (message.author.bot) return;
  if (message.content.indexOf(bot.config.prefix) !== 0) return;

  const args = message.content.split(/ +/g);
  const command = args.shift().slice(bot.config.prefix.length).toLowerCase();

  if (!bot.commands[command]) return;

  bot.commands[command].run(bot, message, args);
});

bot.login(bot.config.token);
