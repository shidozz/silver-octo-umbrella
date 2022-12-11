const { MessageEmbed, UserFlags, GuildMember, Client } = require('discord.js');

module.exports = {
    name: 'userinfo',
    category:'contextuel',
    permissions: ['SEND_MESSAGES'],
    ownerOnly: false,
    usage: 'Utiliser le menu contextuel de Discord',
    examples: ['Utiliser le menu contextuel de Discord'],
    type: 'USER',
    /**
     * 
     * @param {Client} client 
     * @param {*} interaction 
     */
    async runInteraction(client, interaction) {
        const member = await interaction.guild.members.fetch(interaction.targetId);
        const Statusfilter = {
            online: `🟢`,
            idle: `🟠`,
            dnd: `🔴`,
            offline: `⚫` 
        };
        
            
        const flags = {
            BUGHUNTER_LEVEL_1: '<:BugHunterLvl1:1020744046374813778> ',
            BUGHUNTER_LEVEL_2: '<:BugHunterLvl2:1020744047939293194> ',
            DISCORD_CERTIFIED_MODERATOR: '<:DiscordCertifiedModerator:1020744917045231677> ',
            DISCORD_EMPLOYEE: '<:DiscordEmployee:1020744057485541488> ',
            EARLY_SUPPORTER: '<:EarlySupporter:1020744055262548068> ',
            EARLY_VERIFIED_BOT_DEVELOPER: '<:EarlyVerifiedBotDeveloper:1020746522347962388> ',
            HOUSE_BALANCE: '<:BadgeHypeSquadBalance:1020744040079171675> ',
            HOUSE_BRAVERY: '<:BadgeHypeSquadBravery:1020744041371025458> ',
            HOUSE_BRILLIANCE: ':BadgeHypeSquadBrillance:1020744043308777613> ',
            HYPESQUAD_EVENTS: '<:HypeSquadEvents:1020744061545611365> ',
            PARTNERED_SERVER_OWNER: '<:Partner:1020744063143641108> ',
            VERIFIED_BOT: '<:BotTag:1020744044994904075> ',
        }
        const activities = member.presence?.activities?.map((x, i) => 
            `${i+1} - ${x.emoji ? x.emoji.toString()+ "・" : ""}${x.id === "custom" ? `${x.state ? x.state : "Aucune activité"}` : x.type.replace("LISTENING", "Ecoute").replace("WATCHING", "Regarde").replace("PLAYING", "Joue à").replace("STREAMING", "Stream") + ` ** ${x.name}**`}`)
            .join("\n") || "Aucune"
        let checkbot = " "; if (member.user.bot) checkbot = "`Bot`"; else checkbot = "`User`"; const userFlags = member.user.flags.toArray();
        let roles = ''
        if(member.roles.cache.map(role => role).filter(role => role.id !== member.guild.id).join(', ')){
            roles = member.roles.cache.map(role => role).filter(role => role.id !== member.guild.id).join(', ')
        }else{
            roles = "Aucun"
        }

        

        const cmdEmbed = new MessageEmbed()
            .setAuthor({name: client.user.username, iconURL: client.user.displayAvatarURL()})
            .setColor("GREYPLE")
            .setTitle("[/] 📋 User Info !")
            .setThumbnail(member.user.displayAvatarURL())
            .addFields(
                {name: "Nom:", value: `${member.displayName}`, inline: true},
                {name: "Administrateur:", value: `${member.permissions.has("ADMINISTRATOR") ? "🟢" : "🔴"}`, inline: true},
                {name: "Activités:", value: `${activities}`, inline: true},
                {name: "Type:", value: `${checkbot}`, inline: true}, 
                {name: "Bot:", value: `${member.user.bot ? "🟢" : "🔴"}`, inline: true},
                {name: "Status:", value: `${member.presence?.status.replace("dnd", "🔴 Ne pas déranger").replace("idle", "🟠 Inactif").replace("online", "🟢 En ligne").replace("offline", "⚫ Hors ligne") || "🖤 Hors ligne"}`, inline: true},
                {name: "Badges:", value: `${userFlags.length ? userFlags.map(flag => flags[flag]).join(', ') : 'Aucun'}`, inline: true },
                {name: "Nitro:", value: `${member.premiumSince ? "<:DiscordNitro:1020744058693501058>" : "🔴"}`, inline: true },
                {name: "Roles:", value: `${roles}`, inline: true},
                {name: "À Créé Son Compte Le:", value: `<t:${parseInt(member.user.createdTimestamp / 1000)}:f> (<t:${parseInt(member.user.createdTimestamp / 1000)}:R>)`, inline: false},
                {name: "À Rejoint Le:", value: `<t:${parseInt(member.joinedTimestamp / 1000)}:f> (<t:${parseInt(member.joinedTimestamp / 1000)}:R>)`, inline: false}
            ) 
            .setTimestamp()
            .setFooter({text:interaction.user.username, iconURL: interaction.user.displayAvatarURL()})
        interaction.reply({embeds: [cmdEmbed], ephemeral: true});

        
    
        
        /*
        const devices = user.presence?.clientStatus || {};
            
        const description = () => {
          const entries = Object.entries(devices)
          .map(
            (value) => 
            `${value[0][0].toUpperCase()}${value[0].slice(1)}`
            )
          .join(" | ");
          const appareil = entries ? `\n[${Object.entries(devices).length}] **Appareil(s):** ${entries}` : ""
          return `${appareil}`;
        };
        */
    
        /*
        const response = new MessageEmbed().setColor(color).setThumbnail(member.user.displayAvatarURL({ dynamic: true, size : 512})).setAuthor({ name: `${member.user.tag}`, iconURL: member.user.displayAvatarURL({ dynamic: true }) })
            .setFooter({ text: `ID : ${member.id}`, iconURL: member.user.displayAvatarURL({ dynamic: true }) }).setTimestamp()
            .addFields(
                {name : ` Crée le`, value: `**${moment(member.user.createdTimestamp).format('L')}** \n **(${moment(member.user.createdTimestamp).fromNow()})**`, inline: true},
                {name : `<:usered:950088463905062922> Rejoins le`, value : `**${moment(member.joinedAt).format('L')}** \n **(${moment(member.joinedAt).fromNow()})** `, inline: true},
                {name : `<:778353230484471819:950088875471151165>  Informations`, value : `${Statusfilter[member.presence?.status]} ${userFlags.length ? userFlags.map(flag => flags[flag]).join(', ') : ''} ${member.premiumSince ? '<:boost1:950089479614496788> ' : ''} ${checkbot}`, inline: true },
                
                {name : `<:general:950089276018802698> Status`, value : `${activities}`, inline: true},
                {name : `<:roles:950088464861368431> Rôles`, value : member.roles.cache.map(r => r.toString()).join(", "), inline: true},
                {name: `🔰 Activités`, value: member.presence?.activities?.map((x, i) => `${i+1} - ${x.emoji ? x.emoji.toString()+ "・" : ""}${x.id === "custom" ? `${x.state ? x.state : "Aucune activité"}` : x.type.replace("LISTENING", "Ecoute").replace("WATCHING", "Regarde").replace("PLAYING", "Joue à").replace("STREAMING", "Stream") + ` ** ${x.name}**`}`).join("\n") || "Aucune", inline: true},
                {name: `❔ Status`, value: member.presence?.status.replace("dnd", "🔴 Ne pas déranger").replace("idle", "🟠 Inactif").replace("online", "🟢 En ligne").replace("offline", "⚫ Hors ligne") || "🖤 Hors ligne", inline: true},
                //{name : `Appareil`, value : `${description()}`, inline: true},
                );
                */
    }
};