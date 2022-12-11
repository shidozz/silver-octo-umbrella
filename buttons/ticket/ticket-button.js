const { MessageEmbed, MessageActionRow, MessageButton, Interaction, Client, CategoryChannelResolvable } = require("discord.js");

module.exports = {
    name: 'ticket-button',
    /**
     * 
     * @param {Client} client 
     * @param {Interaction} interaction 
     */
    async runInteraction(client, interaction) {
        if (interaction.customId == "ticket-button") {
            let guildSettings = await client.getGuild(interaction.guild);
            
            interaction.guild.channels.create(`ticket-${interaction.user.username}`, {
                topic: interaction.user.id,
                type: "GUILD_TEXT",
                parent: client.channels.cache.get(guildSettings.ticketChannel).parent,
                permissionOverwrites: 
                [
                    {
                        id: interaction.user.id,
                        allow: ['SEND_MESSAGES', 'VIEW_CHANNEL'],
                    },
                    {
                        id: interaction.guild.roles.everyone,
                        deny: ['VIEW_CHANNEL'],
                    },
                ],
            }).then(async c => {
                interaction.reply(
                    {
                        content: `Ticket créé! <#${c.id}>`,
                        ephemeral: true
                    }
                );
                const close = new MessageEmbed()
                    .setColor('6d6ee8')
                    .setAuthor({ name: 'Ticket', iconURL: 'https://i.imgur.com/oO5ZSRK.png'})
                    .setDescription(`**<@!${interaction.user.id}> A ouvert un ticket**\nBienvenue à toi, que pouvons nous faire pour toi ...`)
                    .setTimestamp();
                            
                const row = new MessageActionRow()
                    .addComponents(
                        new MessageButton()
                            .setCustomId('close-button')
                            .setLabel('Fermer le ticket')
                            .setEmoji('❌')
                            .setStyle('SECONDARY'),
                        );
                                
                const opened = await c.send(
                    {
                        embeds: [close],
                        components: [row]
                    }
                );
                                
                opened.pin().then(() => 
                    {
                        opened.channel.bulkDelete(1);
                    }
                );

            });
        };
    }
}


