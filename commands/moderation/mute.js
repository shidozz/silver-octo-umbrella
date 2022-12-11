const ms = require('ms');

module.exports = {
    name: "mute",
    category: "moderation",
    permissions: ["MODERATE_MEMBERS"],
    ownerOnly: false,
    usage: "mute [@member] [duration] [reason]",
    examples: ["mute @rems 4 minutes raison"],
    description: "Mute un utilisateur temporairement avec une raison",
    async run(client, message, args) {
        if (!args[0]) return message.reply('Spécifier un membre à mute!');
        if (!args[1] || !args[2]) return message.reply('Spécifier une durée pour votre mute **(entre 1 et 7 jours)**');
        if (!args[3]) return message.reply('Spécifier une raison à votre mute');

        const target = message.mentions.members.find(m => m.id);        //récupère le membre
        const duration = args.slice(1, 3).join(' '); 
        const convertedTime = ms(duration);                   //récupère la durée(le temps)
        const reason = args.slice(3).join(' ');                         //récupère la raison

        if (!target.moderatable) return message.reply('ce membre ne peut pas être mute par le bot!');
        if (!convertedTime) return message.reply('Spécifier une durée valable!');

        target.timeout(convertedTime, reason);
        message.channel.send(`le membre ${target} a été mute pour ${duration} car ${reason}!`);
    },
    options: [
        {
            name: "target",
            description: "L'utilisateur à mute",
            type: "USER",
            required: true,
        },
        {
            name: "duration",
            description: "L'utilisateur à mute",
            type: "STRING",
            required: true,
        },
        {
            name: "reason",
            description: "La raison du mute",
            type: "STRING",
            required: true,
        },
    ],

    async runInteraction(client, interaction) {
        const target = interaction.options.getMember('target');
        const duration = interaction.options.getString('duration');
        const convertedTime = ms(duration);
        const reason = interaction.options.getString('reason');

        if (!target.moderatable) return interaction.reply('ce membre ne peut pas être mute par le bot!');
        if (!convertedTime) return interaction.reply('Spécifier une durée valable!');

        target.timeout(convertedTime, reason);
        interaction.reply(`le membre ${target} a été mute pour ${duration} jours car ${reason}!`);
      },
    };   

