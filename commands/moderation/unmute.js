module.exports = {
    name: "unmute",
    category: "moderation",
    permissions: ["MODERATE_MEMBERS"],
    ownerOnly: false,
    usage: "unmute [@member]",
    examples: ["unmute @rems"],
    description: "Démute un utilisateur",
    async run(client, message, args) {
        if (!args[0]) return message.reply('Spécifier un membre à démute!');

        const target = message.mentions.members.find(m => m.id);        //récupère le membre
                           
        if (!target.isCommunicationDisabled()) return message.reply('ce membre ne peut pas être déban par le bot car il n\'est pas ban!');
       
        target.timeout(null);
        message.channel.send(`le membre ${target} a été démute!`);
    },
    options: [
        {
            name: "target",
            description: "L'utilisateur à unmute",
            type: "USER",
            required: true,
        }
     
    ],

    async runInteraction(client, interaction) {
        const target = interaction.options.getMember('target');
       
        if (!target.isCommunicationDisabled()) return interaction.reply('ce membre ne peut pas être démute par le bot car il n\'est pas mute!');
       
        target.timeout(null);
        interaction.reply(`le membre ${target} a été démute!`);
      },
    };   