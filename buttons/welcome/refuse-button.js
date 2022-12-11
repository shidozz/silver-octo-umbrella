module.exports = {
    name: 'refuse-button',
    async runInteraction(client, interaction) {
        try {
            await interaction.member.send(`Tu n'as pas accepté les règles. Tu est libre de revenir si tu accepte les règles !`)
        } catch(e) {
            await interaction.reply(`Le membre ${interaction.member.displayName} n'a pas accepté les règles, il a donc était kick du serveur !`)
        }

        await interaction.member.kick('Il n\'a pas accepté les règles !');
    }
};