const dayjs = require("dayjs");
const { MessageEmbed, Client, GuildMember} = require("discord.js");

module.exports = {
    name: "guildMemberUpdate",
    once: false,
    /**
     * 
     * @param {Client} client 
     * @param {GuildMember} oldMember 
     * @param {GuildMember} newMember 
     */
    async execute(client, oldMember, newMember) {
        const nowTimestampF = `<t:${dayjs(Date.now()).unix()}:f>`
        const nowTimestampR = `<t:${dayjs(Date.now()).unix()}:R>`
        const fetchGuild = client.guilds.cache.get(newMember.guild)
        if(newMember.roles.cache !== oldMember.roles.cache && newMember.roles.cache.size > oldMember.roles.cache.size){
	        let oldRoles = oldMember.roles;
            const embed = new MessageEmbed()
                .setAuthor({name: client.user.username, iconURL: client.user.displayAvatarURL()})
                .setColor("GREEN")
                .setTitle(`Les roles de ${newMember.user.tag} ont été modifié !`)
                .setThumbnail(newMember.user.displayAvatarURL())
                .addFields(
                    {name: "֍ Id:", value: `${newMember}`, inline: false},
                    {name: "֍ Roles ajouté:", value: `${newMember.roles.cache.map(role => role).filter((role) => {if(!oldRoles.cache.has(role.id) && role.id !== oldMember.guild.id) return true}).join(', ')}`, inline: false},
                    {name: "֍ Ajouté le:", value: `${nowTimestampF} (${nowTimestampR})`, inline: false},
                )
                .setTimestamp()
                .setFooter({text:newMember.user.username, iconURL: newMember.user.displayAvatarURL()})
    
            const logChannel = client.channels.cache.get("1029784220421345312");
            //logChannel -> Channel (textchannel)
            logChannel.send({ embeds: [embed] });
        } else if(newMember.roles.cache !== oldMember.roles.cache && newMember.roles.cache.size < oldMember.roles.cache.size){

	        let oldRoles = oldMember.roles;
	        let newRoles = newMember.roles;
            const embed = new MessageEmbed()
                .setAuthor({name: client.user.username, iconURL: client.user.displayAvatarURL()})
                .setColor("RED")
                .setTitle(`Les roles de ${newMember.user.tag} ont été modifié !`)
                .setThumbnail(newMember.user.displayAvatarURL())
                .addFields(
                    {name: "֍ Id:", value: `${newMember}`, inline: false},
                    {name: "֍ Roles retiré:", value: `${oldRoles.cache.map(role => role).filter((role) => {if(!newRoles.cache.has(role.id) && role.id !== oldMember.guild.id) return true}).join(', ')}`, inline: false},
                    {name: "֍ Retiré le:", value: `${nowTimestampF} (${nowTimestampR})`, inline: false},
                )
                .setTimestamp()
                .setFooter({text:newMember.user.username, iconURL: newMember.user.displayAvatarURL()})
        
            const logChannel = client.channels.cache.get("1029784220421345312");
            //logChannel -> Channel (textchannel)
            logChannel.send({ embeds: [embed] });
	    }
    }
};