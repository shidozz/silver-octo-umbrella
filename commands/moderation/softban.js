module.exports = {
    name: "softban",
    category: "moderation",
    permissions: ["BAN_MEMBERS"],
    ownerOnly: false,
    usage: "softban [@member] [duration] [reason]",
    examples: ["softban @rems 4 raison"],
    description: "Bannir un utilisateur temporairement avec une raison",
    async run(client, message, args) {
        if (!args[0]) return message.reply('Spécifier un membre à ban!');
        if (isNaN(args[1] || !args[1] || args[1] > 7 || args[1] < 1)) return message.reply('Spécifier une durée pour votre ban **(entre 1 et 7 jours)**');
        if (!args[2]) return message.reply('Spécifier une raison à votre ban');

        const target = message.mentions.members.find(m => m.id);
        const duration = args[1];
        const reason = args.slice(2).join(' ');

        if (!target.bannable) return message.reply('ce membre ne peut pas être ban par le bot!');

        target.ban({ days: duration, reason: reason });
        message.channel.send(`le membre ${target} a été banni pour ${duration} jours!`);
    },
    options: [
        {
            name: "target",
            description: "L'utilisateur à unban",
            type: "USER",
            required: true,
        },
        {
            name: "duration",
            description: "L'utilisateur à ban",
            type: "NUMBER",
            minValue: 1,
            maxValue: 7,
            required: true,
        },
        {
            name: "reason",
            description: "La raison du unban",
            type: "STRING",
            required: true,
        },
    ],

    async runInteraction(client, interaction) {
        const target = interaction.options.getMember('target');
        const duration = interaction.options.getNumber('duration');
        const reason = interaction.options.getString('reason');

        if (!target.bannable) return interaction.reply('ce membre ne peut pas être ban par le bot!');

        target.ban({ days: duration, reason: reason });
        interaction.reply(`le membre ${target} a été banni pour ${duration} jours!`);
      },
    };   

