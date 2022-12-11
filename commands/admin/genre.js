
const { MessageEmbed, MessageActionRow, MessageSelectMenu } = require('discord.js');

const selectMenu = new MessageActionRow()
    .addComponents(
        new MessageSelectMenu()
            .setCustomId('genre-menu')
            .setPlaceholder('Choisir votre genre dans la liste')
            .setMinValues(1)
            .setMaxValues(1)
            .addOptions([
                {
                    label: 'Homme',
                    description: 'Vous êtes un Homme',
                    value: '906644641766580234'
                },
                {
                    label: 'Femme',
                    description: 'Vous êtes une Femme',
                    value: '906644640541863958'
                }
            ])
         
    )

    const genreEmbed = new MessageEmbed()
    .setTitle('Choisissez votre genre si vous le souhaitez !')
    .setDescription('Choisissez ces rôles si vous le souhaitez')

module.exports = {
    name: 'genre',
    category: 'admin',
    permissions: ['ADMINISTRATOR'],
    ownerOnly: true,
    usage: 'genre',
    examples: ['genre'],
    description: 'genre',
    async run(client, message, args) {
        genreEmbed.setAuthor({name: client.user.username,iconURL: client.user.avatarURL({size: 300, dynamic: true, format: 'webp'})})
        .setFooter({text:client.user.username, iconURL: client.user.displayAvatarURL()})
        await message.channel.send({ embeds: [genreEmbed], components: [selectMenu] })
    },
    async runInteraction(client, interaction) {
        genreEmbed.setAuthor({name: client.user.username,iconURL: client.user.avatarURL({size: 300, dynamic: true, format: 'webp'})})
        .setFooter({text:client.user.username, iconURL: client.user.displayAvatarURL()})
        await interaction.reply({ embeds: [genreEmbed], components: [selectMenu] })
    },
};