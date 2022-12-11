
const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'taches',
    category: 'admin',
    permissions: ['ADMINISTRATOR'],
    ownerOnly: true,
    usage: 'taches',
    examples: ['taches'],
    description: 'Listes des taches a faire sur le serveur',
    async run(client, message, args) {

        const tacheEmbed = new MessageEmbed()
        .setColor('#0099ff')
        .setTitle(`__**Liste des choses a faire : **__`)
        .setDescription(`            
    \n\nMise en place du salon de validation réglement......✅\n
        Mise en place des salon arrivé et départ...................✅\n
        Mise en place des tickets support............................✅\n            
        Retravailler les suggestions....................................✅\n
        Mise en place de tous les auto roles........................✅\n
        Création de commande RaidProtect..........................❌\n
        `)
        .setTimestamp();

        await message.channel.send({ embeds: [tacheEmbed] })
    },
    async runInteraction(client, interaction) {

        const tacheEmbed = new MessageEmbed()
            .setColor('#0099ff')
            .setTitle(`__**Liste des choses a faire : **__`)
            .setDescription(`            
    	\n\nMise en place du salon de validation réglement......✅\n
            Mise en place des salon arrivé et départ............✅\n
            Mise en place des tickets support...................✅\n            
            Retravailler les suggestions........................✅\n
            Mise en place de tous les auto roles................✅\n
            Création de commande RaidProtect....................❌\n
            `)
            .setTimestamp();

        await interaction.reply({ embeds: [tacheEmbed] })
    },
};