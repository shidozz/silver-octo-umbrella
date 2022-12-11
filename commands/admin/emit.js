module.exports = {
    name: 'emit',
    category: 'admin',
    permissions: ['ADMINISTRATOR'],
    ownerOnly: true,
    usage: 'emit [eventName]',
    examples: ['emit', 'emit guildCreate'],
    description: 'Emmettre un évènement de votre choix',
    async run(client, message, args) {
        if (!args[0] || !args[0].match(/^(guildMemberAdd|guildMemberRemove|guildCreate|ready|)$/)) return message.reply('Merci d\'entrer un évènement valide (\`guildMemberAdd\`/\`guildMemberRemove\`)');

        if (args[0] == 'guildMemberAdd') {
            client.emit('guildMemberAdd', message.member);
            message.reply({content: 'Event guildMemberAdd émit!', ephemeral: true});
        } else if (args[0] == 'guildCreate') {
            client.emit('guildCreate', message.guild);
            message.reply({content: 'Event guildCreate émit!', ephemeral: true});
        } else if (args[0] == 'ready') {
            client.emit('ready', message.guild);
            message.reply({content: 'Event ready émit!', ephemeral: true});
        } else {
            client.emit('guildMemberRemove', message.member);
            message.reply({content: 'Event guildMemberRemove émit!', ephemeral: true});
        }
    },
    options: [
        {
            name: 'event',
            description: 'Choisir un évènement à emettre',
            type: 'STRING',
            required: true,
            choices: [
                {
                    name: 'guildMemberAdd',
                    value: 'guildMemberAdd'
                },
                {
                    name: 'guildMemberRemove',
                    value: 'guildMemberRemove'
                },
                {
                    name: 'guildCreate',
                    value: 'guildCreate'
                },
                {
                    name: 'ready',
                    value: 'ready'
                }
            ]
        }
    ],
    async runInteraction(client, interaction) {
        const evtChoices = interaction.options.getString('event');

        if (evtChoices == 'guildMemberAdd') {
            client.emit('guildMemberAdd', interaction.member);
            interaction.reply({ content: 'Event guildMemberAdd émit!', ephemeral: true });
        } else if (evtChoices == 'guildCreate') {
            client.emit('guildCreate', interaction.guild);
            interaction.reply({ content: 'Event guildCreate émit!', ephemeral: true });
        } else if (evtChoices == 'ready') {
            client.emit('ready', interaction.guild);
            interaction.reply({ content: 'Event ready émit!', ephemeral: true });
        } else {
            client.emit('guildMemberRemove', interaction.member);
            interaction.reply({ content: 'Event guildMemberRemove émit!', ephemeral: true });
        }
    }
};