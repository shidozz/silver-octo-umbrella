const Logger = require('../../utils/Logger');
const {MessageEmbed, Client} = require('discord.js');
const config = require("../../config.json")

module.exports = {
    name: "ready",
    once: true,
    /**
     * 
     * @param {Client} client 
     */
    async execute(client) {
        
        const REDEM = new MessageEmbed ()
        .setDescription('\:thumbsup_tone1: Redémarrage effectué avec succès')
           .setAuthor({ name: `${client.user.username}`, iconURL: client.user.displayAvatarURL(),})
           .setColor('#0000ff')
           .setTimestamp()

        client.user.setPresence({ activities: [{ name: 'LA RUCHE', type: 'WATCHING' }], status: 'online' });

        //const devGuild = client.guilds.cache.get('896164279366078505');
        //devGuild.commands.set(client.commands.map(cmd => cmd));
        client.application.commands.set(client.commands.map(cmd => cmd))
        
        //client.channels.cache.get(`1020097935461064836`).send({embeds:[REDEM], ephemeral: true})
        
    },
};