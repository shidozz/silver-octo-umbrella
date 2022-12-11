module.exports = {
    name: 'role-3d-button',
    async runInteraction(client, interaction) {
        if(!interaction.member.roles.cache.has('1006401116021465271')){
	    await interaction.member.roles.add('1006401116021465271');
            await interaction.reply({ content: 'Vous venez de rejoindre les Modeleurs 3D', ephemeral: true });
        }else{
            await interaction.member.roles.remove('1006401116021465271');
            await interaction.reply({ content: 'Vous venez de quitter les Modeleurs 3D', ephemeral: true });
	}
    }
};