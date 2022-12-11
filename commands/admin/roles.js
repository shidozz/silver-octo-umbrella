
const { MessageEmbed, MessageActionRow, MessageSelectMenu } = require('discord.js');

const selectMenu = new MessageActionRow()
    .addComponents(
        new MessageSelectMenu()
            .setCustomId('roles-menu')
            .setPlaceholder('Choisir un rôle dans la liste')
            .setMinValues(1)
            .setMaxValues(4)
            .addOptions([
                {
                    label: 'Débutant',
                    description: 'Choisis Débutant',
                    value: '1006399572106559550'
                },
                {
                    label: 'Intermédiaire',
                    description: 'Choisis Intermédiaire',
                    value: '1006401116021465271'
                },
                {
                    label: 'Pro',
                    description: 'Choisis Pro',
                    value: '1006401921390739457'
                }
            ])
         
    )

    const rolesEmbed = new MessageEmbed()
    .setColor("BLURPLE")
    .setDescription('Choisis ton rôle')
    .setTimestamp()

module.exports = {
    name: 'roles',
    category: 'admin',
    permissions: ['SEND_MESSAGES'],
    ownerOnly: true,
    usage: 'roles',
    examples: ['roles'],
    description: 'roles',
    async run(client, message, args) {
        rolesEmbed
            .setAuthor({name: client.user.username, iconURL: client.user.displayAvatarURL()})
            .setFooter({text:client.user.username, iconURL: client.user.displayAvatarURL()})
        await message.channel.send({ embeds: [rolesEmbed], components: [selectMenu] })
    },
    async runInteraction(client, interaction) {
        rolesEmbed
            .setAuthor({name: client.user.username, iconURL: client.user.displayAvatarURL()})
            .setFooter({text:client.user.username, iconURL: client.user.displayAvatarURL()})
        await interaction.reply({ embeds: [rolesEmbed], components: [selectMenu] })
    },
};