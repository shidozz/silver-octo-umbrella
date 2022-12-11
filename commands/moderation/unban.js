const { Interaction, Client } = require("discord.js");

module.exports = {
    name: "unban",
    category: "moderation",
    permissions: ["BAN_MEMBERS"],
    ownerOnly: false,
    usage: "unban [@member] [reason]",
    examples: ["unban @shidozz raison"],
    description: "un membre",
    async run(client, message, args) {
    },
    options: [
        {
            name: "target",
            description: "L'utilisateur à ban",
            type: "USER",
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
        const target = interaction.options.getMember('target');
        const gb = interaction.guild.bans
        if(target.bannable) return interaction.reply("Je ne peux pas unban " + target);

        gb.remove(target.user);
        interaction.reply(`le membre ${target} a été unban!`);
    },
};