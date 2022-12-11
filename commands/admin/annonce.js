const { MessageEmbed, MessageActionRow, MessageSelectMenu, Interaction, Message, Client } = require('discord.js');
    const selectMenu = new MessageActionRow()
        .addComponents(
            new MessageSelectMenu()
                .setCustomId('annonce-menu')
                .setPlaceholder('Choisir un rôle dans la liste')
                .setMinValues(1)
                .setMaxValues(1)
                .addOptions([
                    {
                        label: 'Annonces',
                        description: 'Pour être informer de toutes les nouvelles',
                        value: '1020159223864246342'
                    },
                    {
                        label: 'Partenariats',
                        description: 'Pour connaitre les nouveaux partenariats',
                        value: '1020158797660037130'
                    },
                
                ])
         
        );

    const annonceEmbed = new MessageEmbed()
        .setTitle('Annonce et partenariats')
        .setDescription('Choisissez ces rôles si vous voulez être avertis des annonces et des partenariats !!!');



module.exports = {
    name: 'annonce',
    category: 'admin',
    permissions: ['ADMINISTRATOR'],
    ownerOnly: true,
    usage: 'annonce',
    examples: ['annonce'],
    description: 'annonce',
    /**
     * 
     * @param {Client} client 
     * @param {Message} message
     * @param {string[]} args 
     */
    async run(client, message, args) {
        annonceEmbed.setAuthor({name: client.user.username,iconURL: client.user.avatarURL({size: 300, dynamic: true, format: 'webp'})})
        .setFooter({text:client.user.username, iconURL: client.user.displayAvatarURL()})
        await message.reply({ embeds: [annonceEmbed], components: [selectMenu] })
    },
    /**
     * 
     * @param {Client} client 
     * @param {Interaction} interaction 
     */
    async runInteraction(client, interaction) {
        annonceEmbed.setAuthor({name: client.user.username,iconURL: client.user.avatarURL({size: 300, dynamic: true, format: 'webp'})})
        .setFooter({text:client.user.username, iconURL: client.user.displayAvatarURL()})
        await interaction.reply({ embeds: [annonceEmbed], components: [selectMenu] })
    },
};