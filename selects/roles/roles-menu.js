const { Client, Interaction } = require("discord.js");

module.exports = {
    name: 'roles-menu',
    /**
     * 
     * @param {Client} client 
     * @param {Interaction} interaction 
     */
    async runInteraction(client, interaction) {
	if(!interaction.member.roles.cache.has(interaction.values[0])){
            await interaction.member.roles.add(interaction.values[0]);
            await interaction.reply({ content: 'Le rôle as bien était rajouté ', ephemeral: true });
	}else{
            await interaction.member.roles.add(interaction.values[0]);
            await interaction.reply({ content: 'Le rôle as bien était retiré ', ephemeral: true });
	}
    }
};