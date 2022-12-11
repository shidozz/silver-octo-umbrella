const { Client, Collection } = require('discord.js');
const dotenv = require('dotenv'); dotenv.config();
const mongoose = require('mongoose');
const client = new Client({intents: 3276799, partials: ['MESSAGE','CHANNEL', 'REACTION', 'USER'] });
const Logger = require('./utils/Logger');
const { Database } = require("quickmongo");
const env = process.env;
const db = new Database(env.DATABASE_URI);
const discordModals = require('discord-modals');
//client.commands = new Collection();
//client.bouttons = new Collection();
['commands', 'buttons', 'selects', 'modals'].forEach(x => client[x] = new Collection());
['CommandUtil', 'EventUtil', 'ButtonUtil', 'SelectUtil', 'ModalsUtil'].forEach(handler => { require(`./utils/handlers/${handler}`)(client) });
require('./utils/Functions')(client);
discordModals(client);
client.db = db;
const queue = new Map();
client.queue = queue;

process.on('exit', code => { Logger.client(`Le processus s'est arrêté avec le code: ${code}!`) });

process.on('uncaughtException', (err, origin) => { 
    Logger.error(`UNCAUGHT_EXCEPTION: ${err}`);
    console.error(`Origine: ${origin}`) 
});

process.on('unhandledRejection', (reason, promise) => {
    Logger.warn(`UNHANDLED_REJECTION: ${reason}`); 
    console.log(promise);
});

process.on('Warning', (...args) => Logger.warn(...args));

mongoose.connect(env.DATABASE_URI, {
    autoIndex: false, 
    maxPoolSize: 10, 
    serverSelectionTimeoutMS: 5000, 
    socketTimeoutMS: 45000, 
    family: 4 
}).then(() => { Logger.client('- connecté à la base de données!') })
.catch(err => { Logger.error(err) });

db.on("ready", () => {
    console.log("Connecté !")
})

db.connect()
client.login(env.TOKEN);