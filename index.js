const Discord = require('discord.js');
const bot = new Discord.Client();
const timeDate = require('date-time');
const num = require('random-num');
const token = require('./json_configs/tokens.json');
const rule = require('./json_configs/rules.json');
const role = require('./json_configs/roles.json');

bot.on('ready', () => {
  console.log(`Logged in as ${bot.user.tag} at ` + timeDate({local: true, showMilliseconds: true, showTimeZone: true}));
});

const prefix = "//";

bot.on('message', msg => {
const msInDay = 8.64*10**7;
const msInHour = 3.6*10**6;
const msInMin = 60000;
const msInSec = 1000;
var days = bot.uptime / msInDay;
var hours = (bot.uptime % msInDay) / msInHour;
var minutes = ((bot.uptime % msInDay) % msInHour) / msInMin;
var seconds = (((bot.uptime % msInDay) % msInHour) % msInMin) / msInSec;
var ms = (((bot.uptime % msInDay) % msInHour) % msInMin) % msInSec;
var dayR = Math.round(days);
var hourR = Math.round(hours);
var minR = Math.round(minutes);
var secR = Math.round(seconds);
var msR = Math.round(ms);
const dayS = (dayR + ' Days, ');
const hourS = (hourR + ' Hours, ');
const minS = (minR + ' Minutes, ');
const secS = (secR + ' Seconds, ');
const msS = (msR + ' Milliseconds.');
  
  if (msg.content.includes('789456'))  {
    msg.delete();
    msg.member.roles.set(['604373693933813815', '485191718791151625'])
      .then(console.log)
      .catch(console.error);
    console.log(`${msg.author.username} Dungeoned from ${msg.channel.name} in ${msg.guild} at ` + timeDate({local: true, showMilliseconds: true, showTimeZone: true}));
  }

  if (!msg.content.startsWith(prefix)) {
    return;
  } else { 
    let args = msg.content.substring(prefix.length).split(" ");

    switch (args[0]) {

      case 'ping':
        msg.delete()
        const ping = bot.ws.ping
        const pingE = new Discord.MessageEmbed()
          .setColor(0xeb34db)
          .setTitle('Ping')
          .addField('Current Ping :', ping)
          .setFooter('Ping Displayed Is An Average Of The Last 5 Recorded Pings, Not The Actual Current Ping')
        msg.reply(pingE)
        console.log(`${msg.author.username} used ping command  in ${msg.channel.name} in ${msg.guild} at ` + timeDate({local: true, showMilliseconds: true, showTimeZone: true}))
        break;

      case 'uptime':
        msg.delete()
        if (minR == 0) {
          const upMin = new Discord.MessageEmbed()
            .setColor(0x000000)
            .setTitle('Uptime = ' + secS + msS)
            .setFooter('Uptime Is Just An Estimate, (And Is Sometimes Buggy)')
          msg.reply(upMin)
        } else if (hourR == 0) {
          const upHour = new Discord.MessageEmbed()
            .setColor(0x000000)
            .setTitle('Uptime = ' + minS + secS + msS)
            .setFooter('Uptime Is Just An Estimate, (And Is Sometimes Buggy)')
          msg.reply(upHour)
        } else if (dayR == 0) {
          const upDay = new Discord.MessageEmbed()
            .setColor(0x000000)
            .setTitle('Uptime = ' + hourS + minS + secS + msS)
            .setFooter('Uptime Is Just An Estimate, (And Is Sometimes Buggy)')
          msg.reply(upDay)
        } else {
          const upElse = new Discord.MessageEmbed()
            .setColor(0x000000)
            .setTitle('Uptime = ' + dayS + hourS + minS + secS + msS)
            .setFooter('Uptime Is Just An Estimate, (And Is Sometimes Buggy)')
        }
        console.log(`${msg.author.username} used uptime command in ${msg.channel.name} in ${msg.guild} at ` + timeDate({local: true, showMilliseconds: true, showTimeZone: true}))
        break;
      
      case 'rule':
        msg.delete()
        switch (args[1]) {
          case '1':
            rules = new Discord.MessageEmbed()
              .setTitle('Rule One')
              .setDescription(rule.one)
              .setThumbnail('https://gamedata.britishcouncil.org/sites/default/files/attachment/number-1_1.jpg')
            msg.channel.send(rules)
            console.log(`${msg.author.username} used rule 1 in ${msg.channel.name} in ${msg.guild} at ` + timeDate({local: true, showMilliseconds: true, showTimeZone: true}))
            break;
          case '2':
            rules = new Discord.MessageEmbed()
              .setTitle('Rule Two')
              .setDescription(rule.two)
              .setThumbnail('https://gamedata.britishcouncil.org/sites/default/files/attachment/number-2_1.jpg')
            msg.channel.send(rules)
            console.log(`${msg.author.username} used rule 2 in ${msg.channel.name} in ${msg.guild} at ` + timeDate({local: true, showMilliseconds: true, showTimeZone: true}))
            break;
          case '3':
            rules = new Discord.MessageEmbed()
              .setTitle('Rule Three')
              .setDescription(rule.three)
              .setThumbnail('https://gamedata.britishcouncil.org/sites/default/files/attachment/number-3_4.jpg')
            msg.channel.send(rules)
            console.log(`${msg.author.username} used rule 3 in ${msg.channel.name} in ${msg.guild} at ` + timeDate({local: true, showMilliseconds: true, showTimeZone: true}))
            break;
          case '4':
            rules = new Discord.MessageEmbed()
              .setTitle('Rule Four')
              .setDescription(rule.four)
              .setThumbnail('https://gamedata.britishcouncil.org/sites/default/files/attachment/number-4_1.jpg')
            msg.channel.send(rules)
            console.log(`${msg.author.username} used rule 4 in ${msg.channel.name} in ${msg.guild} at ` + timeDate({local: true, showMilliseconds: true, showTimeZone: true}))
            break;
          case '5':
            rules = new Discord.MessageEmbed()
              .setTitle('Rule Five')
              .setDescription(rule.five)
              .setThumbnail('https://gamedata.britishcouncil.org/sites/default/files/attachment/number-5_2.jpg')
            msg.channel.send(rules)
            console.log(`${msg.author.username} used rule 5 in ${msg.channel.name} in ${msg.guild} at ` + timeDate({local: true, showMilliseconds: true, showTimeZone: true}))
            break;
          case '6':
            rules = new Discord.MessageEmbed()
              .setTitle('Rule Six')
              .setDescription(rule.six)
              .setThumbnail('https://gamedata.britishcouncil.org/sites/default/files/attachment/number-6_1.jpg')
            msg.channel.send(rules)
            console.log(`${msg.author.username} used rule 6 in ${msg.channel.name} in ${msg.guild} at ` + timeDate({local: true, showMilliseconds: true, showTimeZone: true}))
            break;
          case '7':
            rules = new Discord.MessageEmbed()
              .setTitle('Rule Seven')
              .setDescription(rule.seven)
              .setThumbnail('https://gamedata.britishcouncil.org/sites/default/files/attachment/number-7_0.jpg')
            msg.channel.send(rules)
            console.log(`${msg.author.username} used rule 7 in ${msg.channel.name} in ${msg.guild} at ` + timeDate({local: true, showMilliseconds: true, showTimeZone: true}))
            break;
          case '8':
            rules = new Discord.MessageEmbed()
              .setTitle('Rule Eight')
              .setDescription(rule.eight)
              .setThumbnail('https://gamedata.britishcouncil.org/sites/default/files/attachment/number-8_1.jpg')
            msg.channel.send(rules)
            console.log(`${msg.author.username} used rule 8 in ${msg.channel.name} in ${msg.guild} at ` + timeDate({local: true, showMilliseconds: true, showTimeZone: true}))
            break;
          case 'doctrine':
            const doctrine = new Discord.MessageEmbed()
              .setTitle('Doctrine Of Powers')
              .setURL('https://docs.google.com/document/d/1_y2z3UMxbu5Gj_G00rtYc_TCZo4WSWnjCzdIYoPwzyA/edit?usp=sharing')
              .setThumbnail('https://as2.ftcdn.net/jpg/02/39/27/83/500_F_239278359_NsFjY8Znsdnp5CqPqoOwclkDywuaaY0o.jpg')
            msg.channel.send(doctrine)
            console.log(`${msg.author.username} used doctrine in ${msg.channel.name} in ${msg.guild} at ` + timeDate({local: true, showMilliseconds: true, showTimeZone: true}))
            break;
        }
        break;

      case 'request':
        msg.delete()
        const request = new Discord.MessageEmbed()
          .setColor(0xffffff)
          .setURL('https://forms.gle/VQX3YDumkuw5u75u6')
          .setTitle('Requests Form')
        msg.channel.send(request)
        console.log(`${msg.author.username} used request command in ${msg.channel.name} in ${msg.guild} at ` + timeDate({local: true, showMilliseconds: true, showTimeZone: true}))
        break;
      
      case 'bug':
        msg.delete()
        const bug = new Discord.MessageEmbed()
          .setColor(0x123456)
          .setURL('https://forms.gle/j8YENTiwt3de4tZa6')
          .setTitle('Bug Submission Form')
        msg.reply(bug)
        console.log(`${msg.author.username} used bug command in ${msg.channel.name} in ${msg.guild} at ` + timeDate({local: true, showMilliseconds: true, showTimeZone: true}))
        break;

      case 'help':
        msg.delete()
        const help = new Discord.MessageEmbed()
          .setColor(0x9e9b00)
          .setURL('https://docs.google.com/spreadsheets/d/1zNVQazJOR7rgO7qFmJUu7v3eM9S5kjqhl8r3eybTrrY/edit?usp=sharing')
          .setTitle('Help')
          .addField('Ping', 'Sends Bot\'s Current Ping')
          .addField('Uptime', 'Sends Bot\'s Current Uptime')
          .addField('Changelog', 'Sends Current Changelog Info And Links To Changelog Spreadsheet')
          .addField('Version', 'Sends Current Version Information')
          .addField('Roll', 'Rolls A Random Number From First Argument Value To Second Argument Value')
          .addField('Purge', 'ONLY USEABLE BY MODS, Deletes Set Number Of Messages')
          .addField('Dungeon', 'ONLY USEABLE BY MODS, Dungeons Tagged Member')
          .addField('Kick', 'ONLY USEABLE BY MODS, Kicks Tagged Member')
          .addField('Ban', 'ONLY USEABLE BY MODS, Bans Tagged Member')
          .setFooter(`Any Questions Should Be Refered To Warboss741#6658`)
        msg.channel.send(help)
        console.log(`${msg.author.username} used help command in ${msg.channel.name} in ${msg.guild} at ` + timeDate({local: true, showMilliseconds: true, showTimeZone: true}))
        break;

      case 'changelog':
        msg.delete()
        const change = new Discord.MessageEmbed()
          .setColor(0x05f3ff)
          .setURL('https://docs.google.com/spreadsheets/d/1zNVQazJOR7rgO7qFmJUu7v3eM9S5kjqhl8r3eybTrrY/edit?usp=sharing')
          .setTitle('Changelog')
          .addField('Current Changelog Number :', '#3')
          .addField('Last Changelog Date :', '03/23/2020')
        msg.channel.send(change)
        console.log(`${msg.author.username} used changelog command in ${msg.channel.name} in ${msg.guild} at ` + timeDate({local: true, showMilliseconds: true, showTimeZone: true}))
        break;

      case 'version':
        msg.delete()
        const version = new Discord.MessageEmbed()
          .setColor(0x05ff0d)
          .setTitle('Version')
          .addField('Current Live Version :', '1.0.2')
          .addField('Current Testing Version :', '1.0.3')
        msg.channel.send(version)
        console.log(`${msg.author.username} used version command in ${msg.channel.name} in ${msg.guild} at ` + timeDate({local: true, showMilliseconds: true, showTimeZone: true}))
        break;

      case 'roll':
        const number = num(args[1], args[2])
        const roll = new Discord.MessageEmbed()
          .setTitle('Roll')
          .setThumbnail('https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTxCJpKPGiED1JK6m0kwmTpOamiufjzikduw16B6-ClP7IITLJJ')
          .addField('Parameters', 'Rolled From ' + args[1] + ' To ' + args[2])
          .addField('Roll :', number)
          .setFooter('This command only uses pseudo-random functions so bugs will be apparent, please notify of bugs using bug submission form')
        msg.channel.send(roll)
        console.log(`${msg.author.username} used roll command in ${msg.channel.name} in ${msg.guild} for ${args[1]} to ${args[2]} at ` + timeDate({local: true, showMilliseconds: true, showTimeZone: true}))
        break;

      case 'purge':
        msg.delete()
        if (!msg.member.hasPermission('MANAGE_MESSAGES')) {
          msg.reply('Insufficient Permissions')
        } else {
          if (!args[1]) return msg.reply('Error: No value specified.')
          msg.channel.bulkDelete(args[1]);
        }
        console.log(`${msg.author.username} used purge command in ${msg.channel.name} in ${msg.guild} at ` + timeDate({local: true, showMilliseconds: true, showTimeZone: true}))
        break;
      
      case 'warn':
        msg.delete()
        if (!msg.member.hasPermission('MANAGE_ROLES')) {
          const warnError = new Discord.MessageEmbed()
            .setTitle('Error!')
            .setColor('0xEED202')
            .addField('Permissions', `${msg.author.username}, You do not have sufficient permissions to use that command.`)
            .setFooter('Please contact Garbear101#5999 or Warboss741#6658 if you believe this is an error')
          msg.reply(warnError)
        } else {
          if (!args[1]) {
            const warnArgs = new Discord.MessageEmbed()
              .setTitle('Error!')
              .setColor('0xEED202')
              .addField('Users', `${msg.author.username}, You have failed to mention a user to warn.`)
              .addField('Proper Useage', '//warn {Tag User To Warn Here} {Type Reason Here}')
              .setFooter('If you believe this is an error, please contact Warboss741#6658')
            msg.reply(warnArgs)
          } else {
            if (!args[2]) {
              const warnRsn = new Discord.MessageEmbed()
                .setTitle('Error!')
                .setColor('0xEED202')
                .addField('Reason', `${msg.author.username}, You failed to provide a reason for the warning`)
                .addField('Proper Useage', '//warn {Tag User To Warn Here} {Type Reason Here}')
                .setFooter('If you believe this is an error, please contact Warboss741#6658')
              msg.reply(warnRsn)
            } else {
              const warn1 = msg.guild.roles.fetch(role.Warn1)
              const warn2 = msg.guild.roles.fetch(role.Warn2)
              const dungeon = msg.guild.roles.fetch(role.Dungeon)
              const user = msg.mentions.users.first()

              if (msg.mentions.users.has(warn1)) {
                user.addRole(warn2)
                user.removeRole(warn1)
                const warned2 = new Discord.MessageEmbed()
                  .addTitle('Warned')
                  .setColor('0x000000')
                  .addField('User Warned', `${user.username} has been warned for the second time`)
                  .setFooter('If you believe this is an error, contact a moderator')
                msg.channel.send(warned2)
              } else if (msg.mentions.users.has(warn2)) {
                user.addRole(dungeon)
                user.removeRole(warn2)
                const dungeoned = new Discord.MessageEmbed()
                  .addTitle('Warned')
                  .setColor('0x000000')
                  .addField('User Warned', `${user.username} has been warned for the third time, and subsequently dungeoned`)
                  .setFooter('If you believe this is an error, contact a moderator')
                msg.channel.send(dungeoned)
              } else {
                user.addRole(warn1)
                const warned1 = new Discord.MessageEmbed()
                  .addTitle('Warned')
                  .setColor('0x000000')
                  .addField('User Warned', `${user.username} has been warned for the first time`)
                  .setFooter('If you believe this is an error, contact a moderator')
                msg.channel.send(warned1)
              }
            }
          }
        }
        console.log(`${msg.author.username} used the warn command on ` + args[1] + ` in ${msg.channel.name} in the guild ${msg.guild.name} at ` + timeDate({local: true, showMilliseconds: true, showTimeZone: true}))
        break;

      case 'dungeon':
        msg.delete()
        if (!msg.member.hasPermission('MANAGE_ROLES')) {
          msg.reply('Insufficient Permissions')
        } else {
          const dung = msg.mentions.users.first()
          if (dung) {
            const member = msg.guild.member(dung)
            if (member) {
              member.roles.set(['604373693933813815'])
            } else {
              msg.reply('That user isn\'t in this server')
            }
          } else {
            msg.reply('That user isn\'t in this server / You need to specify a person')
          }
        }
        console.log(`${msg.author.username} used dungeon command in ${msg.channel.name} in ${msg.guild} on ${msg.mentions.users.first} at ` + timeDate({local: true, showMilliseconds: true, showTimeZone: true}))
        break;

      case 'kick':
        msg.delete()
        if (!msg.member.hasPermission("KICK_MEMBERS")) {
          msg.reply('You do not have permissions to use this command')
        } else {
          const user = msg.mentions.users.first();
          if (user) {
            const member = msg.guild.member(user);
            if (member) {
              member.kick('You have been kicked from the Sanctuary, if you think this is a mistake, talk with a staff member and we will deliberate over it.').then(() => {
                let reason = args.slice(2).join(" ") || "";
                msg.reply(`Successfully Kicked ${user} for ` + reason);
                let kicklog = `${msg.author.username} Kicked ${user.username}: ${reason}`;
                console.log(kicklog)
              }).catch(err => {
                msg.reply('I was unable to kick the member');
                console.log(err);
              })
            } else {
              msg.reply("That user isn\'t in this server")
            }
          } else {
            msg.reply("That user isn\'t in the server / You need to specify a person")
          }
        }
        console.log(`${msg.author.username} used kick command in ${msg.channel.name} in ${msg.guild} on ${msg.mentions.users.first} at ` + timeDate({local: true, showMilliseconds: true, showTimeZone: true}))
        break;

        case 'ban':
        msg.delete()
        if (!msg.member.hasPermission("BAN_MEMBERS")) {
          msg.reply('You do not have permissions to use this command')
        } else {
          const buser = msg.mentions.users.first();
          if (buser) {
            const member = msg.guild.member(buser);
            if (member) {
              member.ban('You have been banned from the Sanctuary, if you think this is a mistake, talk with a staff member and we will deliberate over it.').then(() => {
                let reason = args.slice(2).join(" ") || "";
                msg.reply(`Successfully banned ${buser} for ` + reason);
                let banlog = `${msg.author.username} Banned ${user}: ${reason}`;
                console.log(banlog)
              }).catch(err => {
                msg.reply('I was unable to ban the member');
                console.log(err);
              })
            } else {
              msg.reply("That user isn\'t in this server")
            }
          } else {
            msg.reply("That user isn\'t in the server / You need to specify a person")
          }
        }
      console.log(`${msg.author.username} used ban command in ${msg.channel.name} in ${msg.guild} on ${msg.mentions.users.first} at ` + timeDate({local: true, showMilliseconds: true, showTimeZone: true}))
      break;
    }
  }

});

bot.login(token.token);