const fs = require('fs');
const discord = require('discord.js');
const bot = new discord.Client();

const reload = require('./commands/reload');

const configPath = `./config/${process.env.ENVIRONMENT}.json`;

bot.config = require('./config/default.json');

if (fs.existsSync(configPath)) {
  Object.assign(bot.config, require(configPath));
}

bot.commands = {};
reload.run(bot);

bot.on('ready', () => {
  console.warn(`Bot started, with ${bot.users.size} users, in ${bot.channels.size} channels of ${bot.guilds.size} guilds.`);
  bot.user.setGame(`on ${bot.guilds.size} servers`);
});

bot.on('message', async message => {
  if (message.author.bot) return;
  if (message.content.indexOf(bot.config.prefix) !== 0) return;

  const args = message.content.split(/ +/g);
  const command = args.shift().slice(bot.config.prefix.length).toLowerCase();

  if (!bot.commands[command]) return;

  if (bot.commands[command].help.role) {
    let role = message.guild.roles.find('name', bot.commands[command].help.role);

    if (!role || !message.member.roles.has(role.id)) return;
  }

  bot.commands[command].run(bot, message, args);
});

bot.login(bot.config.token);
