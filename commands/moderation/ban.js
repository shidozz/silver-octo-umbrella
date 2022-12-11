module.exports = {
    name: "ban",
    category: "moderation",
    permissions: ["BAN_MEMBERS"],
    ownerOnly: false,
    usage: "ban [@member] [reason]",
    examples: ["ban @rems raison"],
    description: "un utilisateur avec une raison",
    async run(client, message, args) {
        // Etape 1 : verifier si les arguments son taper dans la commande
        // Etape 2 : sélectionner le membre choisir (id ou mention?) -> mention
        // Etape 3 : reason 
        // Etape 4 :vérifier si le membre est bannable. 
        // Etape 5 : ban le mebre avec raison
        // Etape 6 : puis envoyer un message sur le salon 
        if (!args[0]) return message.reply('Spécifier un membre à ban!');
        if (!args[1]) return message.reply('Spécifier une raison à votre ban');

        const target = message.mentions.members.find(m => m.id);
        //Target -> guild member
    
        const reason = args.slice(1).join(' ');

        if (!target.bannable) return message.reply('ce membre ne peut pas être ban par le bot!');

        target.ban({ reason });
        message.channel.send(`le membre ${target} a été ban!`);
    },
    options: [
        {
            name: "target",
            description: "L'utilisateur à ban",
            type: "USER",
            required: true,
        },
        {
            name: "reason",
            description: "La raison du ban",
            type: "STRING",
            required: true,
        },
    ],

    async runInteraction(client, interaction, guildSettings) {
        const target = interaction.options.getMember('target');
        const reason = interaction.options.getString('reason');

        if (!target.bannable) return interaction.reply('ce membre ne peut pas être ban par le bot!');

        target.ban({ reason });
        interaction.reply(`le membre ${target} a été ban!`);
      },
    };