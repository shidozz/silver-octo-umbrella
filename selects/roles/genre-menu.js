module.exports = {
    name: 'genre-menu',
    async runInteraction(client, interaction) {
	if(!interaction.member.roles.cache.has(interaction.values[0])){
            await interaction.member.roles.add(interaction.values[0]);
            await interaction.reply({ content: 'Le rôle as bien était rajouté ', ephemeral: true });
    	}else{
            await interaction.member.roles.remove(interaction.values[0]);
            await interaction.reply({ content: 'Le rôle as bien était retiré ', ephemeral: true });
    	}
    }
};