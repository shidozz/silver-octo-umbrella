const { Interaction, Client } = require("discord.js");

module.exports = {
    name: "unbanid",
    category: "moderation",
    permissions: ["BAN_MEMBERS"],
    ownerOnly: false,
    usage: "unbanid [@id] [reason]",
    examples: ["unbanid 466673362748440579"],
    description: "un id",
    async run(client, message, args) {
    },
    options: [
        {
            name: "target",
            description: "L'utilisateur à ban",
            type: "STRING",
            required: true,
        },
    ],
    /**
     * 
     * @param {Client} client 
     * @param {Interaction} interaction 
     * @param {*} guildSettings 
     * @returns 
     */
    async runInteraction(client, interaction, guildSettings) {
        const target = interaction.options.getString('target');
        const gb = interaction.guild.bans
        try {
            gb.remove(target);
        } catch (error) {
            return interaction.reply({content: `le membre <@${target}> ne peux pas être unban!`, ephemeral: true})
        }
        
        interaction.reply({content: `le membre <@${target}> a été unban!`, ephemeral: true});
    },
};