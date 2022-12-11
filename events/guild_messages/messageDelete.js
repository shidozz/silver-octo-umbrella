const { Client, Message, MessageEmbed } = require('discord.js')
const ownerId = '466673362748440579';
const prefix = "!";

module.exports = {
    name: "messageDelete",
    once: false,
    /**
     * 
     * @param {Client} client 
     * @param {Message} message 
     */
    async execute(client, message) {
        const fetchGuild = await client.getGuild(message.guild);
        const TChannel = client.channels.cache.get(fetchGuild.messageChannel);

        const Ebd = new MessageEmbed()
        .setAuthor({name: client.user.username, iconURL: client.user.displayAvatarURL()})
        .setFields({name: message.author.username,value: message.content, inline: false})
        .setColor("RED")
        .setThumbnail(message.author.displayAvatarURL())
        .setTimestamp()
        .setFooter({text: message.author.username, iconURL: message.author.displayAvatarURL()})
        TChannel.send({embeds: [Ebd]})
    },


};
