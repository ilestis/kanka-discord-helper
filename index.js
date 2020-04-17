require('dotenv').config()

const Discord = require('discord.js');
const client = new Discord.Client();

client.once('ready', () => {
    console.log('Ready!');
});

const commands = {
    'kanka': {title: 'Link to Kanka', 'body' : 'https://kanka.io'},
    'faq': {title: 'Link to the Kanka FAQ', body: 'https://kanka.io/en/faq'},
    'yt': {title: 'Kanka\'s Youtube channel', body: 'https://www.youtube.com/channel/UCwb3pl0LOlxd3GvMPAXIEog'},
    'app': {title: 'FAQ: Mobile app', body: 'https://kanka.io/en/faq/mobile/is-there-a-mobile-app-is-one-planned'},
    'attr': {title: 'FAQ: Attribute templates', body: 'https://kanka.io/en/faq/attribute-templates/attribute-templates-what-are-they'},
    'export': {title: 'FAQ: Export/Backup', body: 'https://kanka.io/en/faq/backup/how-can-i-backup-or-export-my-campaign'},
    'perm': {title: 'FAQ: Permissions', body: 'https://kanka.io/en/faq/permissions/can-i-limit-the-information-my-players-see-in-my-campaign'},
    'pricing': {title: 'FAQ: pricing', body: 'https://kanka.io/en/faq/free/will-the-app-stay-free'},
    'boost': {title: 'Youtube: Campaign Boosters', body: 'https://www.youtube.com/watch?v=eSyHGSq4SbE'},
    'blog': {title: 'Link to the Kanka blog', body: 'https://blog.kanka.io'},
    'news': {title: 'Link to Kanka news', body: 'https://kanka.io/en/news'},
};



client.login(process.env.DISCORD_BOT_TOKEN);
client.on('message', message => {
    if (message.content === '$kb') {
        var help = "What do you need help with?\n";
        for (const property in commands) {
            help += ' * `$kb ' + property + '` ' + commands[property].title + "\n";
        }

        message.channel.send(help);
    }
    else if (message.content.substr(0, 4) === '$kb ') {
        var command = message.content.slice(4);
        if (typeof(commands[command]) !== 'undefined') {
            message.channel.send(commands[command].body);
        }
    }
});