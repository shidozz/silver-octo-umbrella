module.exports = {
    name: 'role-hist-button',
    async runInteraction(client, interaction) {
        if(!interaction.member.roles.cache.has('1006401921390739457')){
            await interaction.member.roles.add('1006401921390739457');
            await interaction.reply({ content: 'Vous venez de rejoindre les Historiens', ephemeral: true });
        }else{
	    await interaction.member.roles.remove('1006401921390739457');
            await interaction.reply({ content: 'Vous venez de rejoindre les Historiens', ephemeral: true });
        }
    }
};