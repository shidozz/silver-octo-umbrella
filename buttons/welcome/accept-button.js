module.exports = {
    name: 'accept-button',
    async runInteraction(client, interaction) {
        await interaction.member.roles.add('906644652621443082');
        await interaction.reply({ content: 'Vous avez accepté les règles! Vous pouvez maintenant accéder au serveur', ephemeral: true });
    }
};