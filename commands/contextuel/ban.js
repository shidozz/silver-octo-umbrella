const { Client, Interaction } = require("discord.js");

module.exports = {
    name: "bans",
    category:'contextuel',
    permissions: ["BAN_MEMBERS"],
    ownerOnly: false,
    usage: "Utiliser le menu contextuel de Discord",
    examples: ["Utiliser le menu contextuel de Discord"],
    type: 'USER',
    /**
     * 
     * @param {Client} client 
     * @param {Interaction} interaction 
     * @returns 
     */
    async runInteraction(client, interaction) {
        const member = await interaction.guild.members.fetch(interaction.targetId);

        if (!member.bannable) return interaction.reply({content: 'ce membre ne peut pas être ban par le bot!', ephemeral: true});

        member.ban({ reason: `Ban par ${interaction.user}` });
        interaction.reply(`le membre ${member} a été ban!`);
      },
    };