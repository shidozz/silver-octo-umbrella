const { MessageEmbed, Client, Interaction } = require("discord.js")

module.exports = {
    name: 'suggestion',
    category: 'utils',
    permissions: ['SEND_MESSAGES'],
    ownerOnly: false,
    usage: 'suggestion [suggestions]',
    examples: ['suggestion', 'suggestion qu\'elle heure est-il ?'],
    description: 'Poster votre propre suggestion',
    options: [
        {
            name: 'content',
            description: 'tapper votre suggestion',
            type: 'STRING',
            require: true,
        },

    ],
    /**
     * 
     * @param {Client} client 
     * @param {Interaction} interaction 
     */
    async runInteraction(client, interaction) {
        const pollContent = interaction.options.getString('content');

        const embed = new MessageEmbed()
            .setColor('#C5BE74')
            .setAuthor({name: client.user.username, iconURL: client.user.displayAvatarURL()})
            .setTitle("\`Nouvelle suggestions\`")
            .setDescription("```fix\n" + pollContent + "\n```")
            .setThumbnail(interaction.user.displayAvatarURL())
            .setTimestamp()
            .setFooter({ text: 'Envoyé par: ' + interaction.user.tag, iconURL: `${interaction.user.displayAvatarURL()}` })

        const poll = await interaction.reply({ embeds: [embed], fetchReply: true });
        poll.react('👍');
        poll.react('👎');
    }
};
