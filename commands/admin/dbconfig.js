module.exports = {
    name: 'dbconfig',
    category: 'admin',
    permissions: ['ADMINISTRATOR'],
    ownerOnly: true,
    usage: 'dbconfig [key] <value>',
    examples: ['dbconfig', 'dbconfig prefix ?', 'dbconfig prefix'],
    description: 'Configurer les données de la base de données',
    options: [
        {
            name: 'key',
            description: 'Choisir une clé a modifier ou afficher',
            type: 'STRING',
            required: true,
            choices: [
                {
                    name: 'prefix',
                    value: 'prefix'
                },
                {
                    name: 'logChannel',
                    value: 'logChannel'
                },
                {
                    name: 'testChannel',
                    value: 'testChannel'
                },
                {
                    name:'ticketCategory',
                    value:'ticketCategory'
                }
            ]
        },
        {
            name: 'value',
            description: 'Choisir la nouvelle valeur pour votre clé',
            type: 'STRING'
        }
    ],
    async runInteraction(client, interaction, guildSettings) {
        const key = interaction.options.getString('key');
        const value = interaction.options.getString('value');

        if (key == 'prefix') {
            if (value) {
                await client.updateGuild(interaction.guild, { prefix: value });
                return interaction.reply({ content: `Nouvelle valeur de préfix: ${value}`, ephemeral: true });
            }
                      
            interaction.reply({ content: `valeur de préfix: ${guildSettings.prefix}`, ephemeral: true });
        } else if (key == 'logChannel') {
            if (value) {
                await client.updateGuild(interaction.guild, { logChannel: value });
                return interaction.reply({ content: `Nouvelle valeur de logChannel: ${value}`, ephemeral: true });
            }
                      
            interaction.reply({ content: `valeur de logChannel: ${guildSettings.logChannel}`, ephemeral: true });
        } else if (key == 'testChannel') {
            if (value) {
                await client.updateGuild(interaction.guild, { testChannel: value });
                return interaction.reply({ content: `Nouvelle valeur de testChannel: ${value}`, ephemeral: true });
            }
                      
            interaction.reply({ content: `valeur de testChannel: ${guildSettings.testChannel}`, ephemeral: true });
        } else if (key == 'ticketCategory') {
            if (value) {
                await client.updateGuild(interaction.guild, { ticketCategory: value });
                return interaction.reply({ content: `Nouvelle valeur de ticketCategory: ${value}`, ephemeral: true });
            }
                      
            interaction.reply({ content: `valeur de ticketCategory: ${guildSettings.ticketCategory}`, ephemeral: true });
        }
    }
};