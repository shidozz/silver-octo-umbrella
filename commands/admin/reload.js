const { Interaction, Client } = require("discord.js");

module.exports = {
    name: 'reload',
    category: 'admin',
    permissions: ['ADMINISTRATOR'],
    ownerOnly: true,
    usage: 'reload',
    examples: ['reload'],
    description: 'Relancer le bot',
    /**
     * 
     * @param {Client} client 
     * @param {Interaction} interaction 
     */
    async runInteraction(client, interaction) {
        //const devGuild = await client.guilds.cache.get('');
        //devGuild.commands.set([]);
        
        client.application.commands.set(client.commands.map(cmd => cmd))
        await interaction.reply('Bot relancé avec succès');
        //return process.exit()
    },
};