
const { MessageEmbed, MessageActionRow, MessageButton } = require('discord.js');

const buttons = new MessageActionRow()
    .addComponents(
        new MessageButton()
            .setCustomId('role-dev-button')
            .setLabel('👨‍💻 Dev 👩‍💻')
            .setStyle('PRIMARY')
            .setEmoji('👨‍💻'),
        new MessageButton()
            .setCustomId('role-3d-button')
            .setLabel('🦾 Modeleur 3D 💪')
            .setStyle('PRIMARY')
            .setEmoji('🦾'),
        new MessageButton()
            .setCustomId('role-hist-button')
            .setLabel('Historiens')
            .setStyle('PRIMARY')
            .setEmoji('🦅'),
        new MessageButton()
            .setCustomId('role-sound-button')
            .setLabel('🎶 Sound Designer 🎶')
            .setStyle('PRIMARY')
            .setEmoji('🎶')
    )

const maisonEmbed = new MessageEmbed()
    .setTitle('Bienvenue sur La Ruche!')
    .setDescription(`Ici tu trouveras différents niveau dans lequel tu auras des téchniques pour t'amélioré !`)
    


module.exports = {
    name: 'niveau',
    category: 'admin',
    permissions: ['SEND_MESSAGES'],
    ownerOnly: true,
    usage: 'niveau',
    examples: ['Actionner le bouton de votre niveau'],
    description: 'Choississez votre niveau',
    async run(client, message, args) {
        maisonEmbed.setAuthor({name: client.user.username,iconURL: client.user.avatarURL({size: 300, dynamic: true, format: 'webp'})})
        .setFooter({text:client.user.username, iconURL: client.user.displayAvatarURL()})
        await message.channel.send({ embeds: [maisonEmbed], components: [buttons] })
    },
    async runInteraction(client, interaction) {
        maisonEmbed.setAuthor({name: client.user.username,iconURL: client.user.avatarURL({size: 300, dynamic: true, format: 'webp'})})
        .setFooter({text:client.user.username, iconURL: client.user.displayAvatarURL()})
        await interaction.reply({ embeds: [maisonEmbed], components: [buttons] })
    },
};