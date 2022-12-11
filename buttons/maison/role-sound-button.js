module.exports = {
    name: 'role-sound-button',
    async runInteraction(client, interaction) {
	if(!interaction.member.roles.cache.has('1006402657818263703')){
            await interaction.member.roles.add('1006402657818263703');
            await interaction.reply({ content: 'Vous venez de rejoindre les Sound Designers !', ephemeral: true });
	}else{
	    await interaction.member.roles.add('1006402657818263703');
            await interaction.reply({ content: 'Vous venez de rejoindre les Sound Designers !', ephemeral: true });
	}
    }
};