const { MessageEmbed } = require("discord.js");


module.exports = {
    name: "guildMemberRemove",
    once: false,
    async execute(client, member) {
        const fetchGuild = await client.getGuild(member.guild);
        const fetchKickLog = await member.guild.fetchAuditLogs({
            limit: 1,
            type: "MEMBER_KICK",
        });

        const kickLog = fetchKickLog.entries.first();
        const { target, reason } = kickLog; // -> target = kickLog.target || reason = kickLog.reason

        let isMemberKick = target.id === member.id ? true : false;
        let reasont;
        
        const embed = new MessageEmbed()
        .setAuthor({name: client.user.username, iconURL: client.user.displayAvatarURL()})
        .setColor("RED")
        .setTitle(`Aurevoir ${member.user.tag} !`)
        .setThumbnail(member.user.displayAvatarURL())
        .addFields(
            {name: "֍ Id:", value: `<@${member.id}>`, inline: false},
            {name: "֍ Créé le:", value: `<t:${parseInt(member.user.createdTimestamp / 1000)}:f> (<t:${parseInt(member.user.createdTimestamp / 1000)}:R>)`, inline: false},
            {name: "֍ Rejoint le:", value: `<t:${parseInt(member.joinedTimestamp / 1000)}:f> (<t:${parseInt(member.joinedTimestamp / 1000)}:R>)`, inline: false},
            {name: "֍ Quitté le:", value: `<t:${parseInt(Date.now() / 1000)}:f> (<t:${parseInt(Date.now() / 1000)}:R>)`, inline: false},
            {name: "֍ Kick?:", value: `${isMemberKick  ? `🟢 `+ (reasont = reason ? "**(*" + reason + "*)**" : "") : '🔴'}`, inline: false},
        )
        .setTimestamp()
        .setFooter({text:member.user.username, iconURL: member.user.displayAvatarURL()})

        const logChannel = client.channels.cache.get(fetchGuild.logChannel);
        logChannel.send({ embeds: [embed] });
    }
};