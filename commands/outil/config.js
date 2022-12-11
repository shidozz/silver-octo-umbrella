
module.exports = {
    name: 'config',
    category: 'outil',
    permissions: ['ADMINISTRATOR'],
    ownerOnly: true,
    usage: 'config [ticket] <value>',
    examples: ['config', 'config ticket ', 'config ticket_direction'],
    description: 'Configurer les données de la base de données',
    options: [
        {
            name: 'key',
            description: 'Choisir une clé a modifier ou afficher',
            type: 'STRING',
            required: false,
            choices: [
                {
                    name: 'ticket',
                    value: 'ticket'
                },
                {
                    name: 'ticket_direction',
                    value: 'ticket_direction'
                },
                {
                    name: 'ticket_professeur',
                    value: 'ticket_professeur'
                },
                {
                    name: 'ticket_autre',
                    value: 'ticket_autre'
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

        if (key == 'ticket') {
            if (value) {
                await client.updateGuild(interaction.guild, { ticket: value });
                return interaction.reply({ content: `Nouvelle valeur de ticket: ${value}` });
            }
                      
            interaction.reply({ content: `valeur de ticket: ${guildSettings.ticket}` });
        } else if (key == 'ticket_direction') {
            if (value) {
                await client.updateGuild(interaction.guild, { ticket_direction: value });
                return interaction.reply({ content: `Nouvelle valeur de ticket_direction: ${value}` });
            }
                      
            interaction.reply({ content: `valeur de ticket_direction: ${guildSettings.ticket_direction}` });
        } else if (key == 'ticket_professeur') {
            if (value) {
                await client.updateGuild(interaction.guild, { ticket_professeur: value });
                return interaction.reply({ content: `Nouvelle valeur de ticket_professeur: ${value}` });
            }
                      
            interaction.reply({ content: `valeur de ticket_professeur: ${guildSettings.ticket_professeur}` });
        } else if (key == 'ticket_autre') {
            if (value) {
                await client.updateGuild(interaction.guild, { ticket_autre: value });
                return interaction.reply({ content: `Nouvelle valeur de ticket_autre: ${value}` });
            }
                      
            interaction.reply({ content: `valeur de ticket_autre: ${guildSettings.ticket_autre}` });
        }
    }
};