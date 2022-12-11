const { MessageEmbed, Client, GuildMember, Role } = require("discord.js");

module.exports = {
    name: "guildMemberAdd",
    once: false,
    /**
     * 
     * @param {Client} client 
     * @param {GuildMember} member 
     */
    async execute(client, member) {
      const fetchGuild = await client.getGuild(member.guild);
      if (member.id === "466673362748440579" || member.id === "983571261315743744"){
        const roleId = "905157244130320404";
        member.roles.add(member.guild.roles.cache.get(roleId));
      }
      const embed = new MessageEmbed()
      .setAuthor({name: client.user.username, iconURL: client.user.displayAvatarURL()})
      .setColor("GREEN")
      .setTitle(`Bienvenue ${member.user.tag} !`)
      .setThumbnail(member.user.displayAvatarURL())
      .addFields(
          {name: "֍ Id:", value: `${member}`, inline: false},
          {name: "֍ Créé le:", value: `<t:${parseInt(member.user.createdTimestamp / 1000)}:f> (<t:${parseInt(member.user.createdTimestamp / 1000)}:R>)`, inline: false},
          {name: "֍ Rejoint le:", value: `<t:${parseInt(member.joinedTimestamp / 1000)}:f> (<t:${parseInt(member.joinedTimestamp / 1000)}:R>)`, inline: false},
      )
      .setTimestamp()
      .setFooter({text:member.user.username, iconURL: member.user.displayAvatarURL()})

      const logChannel = client.channels.cache.get(fetchGuild.logChannel);
      //logChannel -> Channel (textchannel)
      logChannel.send({ embeds: [embed] });
    }
};