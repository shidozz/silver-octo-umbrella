const { MessageEmbed } = require("discord.js")
const { readdirSync } = require('fs');
const commandFolder = readdirSync('./commands');

const contextDescription = {
    userinfo: 'Renvoie des informations sur l\'utilisateur'
};

module.exports = {
    name: 'help',
    category: 'utils',
    permissions: ['SEND_MESSAGES'],
    ownerOnly: false,
    usage: 'help',
    examples: ['help', 'help ping', 'help emit'],
    description: 'Renvoie une liste de commande filtrée par catégorie',
    options: [
        {
            name: 'command',
            description: 'Taper le nom de votre commande',
            type: 'STRING',
            required: false
        }
    ],
    async run(client, message, args) {
	
    },
    async runInteraction(client, interaction, guildSettings) {
        const prefix = guildSettings.prefix;
        const cmdName = interaction.options.getString('command');
        if (!cmdName) {
            const noArgsEmbed = new MessageEmbed()
                .setColor('#6e4aff')
                .addField('Liste des commandes', `Une liste de toutes les catégories disponibles et leurs commandes.\nPour plus d'informations sur une commande, tapez \`${prefix}help <command>\``)

            for (const category of commandFolder) {
                noArgsEmbed.addField(
                    `${category.replace(/(^\w|\s\w)/g, (firstLetter) =>
                        firstLetter.toUpperCase()
                    )}`,
                    `\`${client.commands
                        .filter((cmd) => cmd.category == category.toLowerCase())
                        .map((cmd) => cmd.name)
                        .join(", ")}\``
                );
            }

            return interaction.reply({ embeds: [noArgsEmbed], ephemeral: true });
        }

        const cmd = client.commands.get(cmdName);
        if (!cmd) return interaction.reply({ content: 'cette commande n\'nexiste pas!', ephemeral: true });
        const argsEmbed = new MessageEmbed()
        .setAuthor({name: client.user.username, iconURL: client.user.displayAvatarURL()})
        .setColor("#6e4aff")
        .addFields(
            {
                name: `${cmd.name.replace(/(^\w|\s\w)/g, firstLetter => firstLetter.toUpperCase())}:`,
                value: `\`${cmd.description ? cmd.description : contextDescription[`${cmd.name}`]}\``
            },
            {
                name: `Utilisation:`,
                value: `\`${prefix}${cmd.usage}\``
            },
            {
                name: `Exemples:`,
                value: `\`${prefix}${cmd.exemples.join(` | ${prefix}`)}\``
            },
            {
                name: `Permissions:`,
                value: `${cmd.ownerOnly ? "/!\\ Pour l'owner du bot uniquement /!\\" : `\`${cmd.permissions.join(`, `)}\``}`
            }
        )
        .setFooter({text: `Commande help ${cmd.name} par ${interaction.user.username}`, iconURL: interaction.user.displayAvatarURL()})
        
        return interaction.reply({embeds: [argsEmbed], ephemeral: true});
    }
};