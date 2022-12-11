
const { MessageEmbed, MessageActionRow, MessageButton } = require('discord.js');

const buttons = new MessageActionRow()
    .addComponents(new MessageButton()
        .setCustomId('ticket-button')
        .setEmoji('📩')
        .setLabel('Ouvrir un ticket')
        .setStyle('SUCCESS'),

    )

const TICKET = new MessageEmbed()
    .setColor('#0099ff')
    .setTitle('**Réagissez avec 📩 pour créer un ticket !**')
    .setDescription(`Créez un ticket d'assistance pour contacter un membre du personnel...`)
    .setTimestamp();



module.exports = {
    name: 'ticket',
    category: 'admin',
    permissions: ['ADMINISTRATOR'],
    ownerOnly: true,
    usage: 'ticket',
    examples: ['ticket'],
    description: 'Création de ticket',
    async runInteraction(client, interaction) {
        TICKET.setAuthor({name: client.user.username,iconURL: client.user.avatarURL({size: 300, dynamic: true, format: 'webp'})})
        .setFooter({text:client.user.username, iconURL: client.user.displayAvatarURL()})
        
        await interaction.reply({ embeds: [TICKET], components: [buttons] })
    },
};