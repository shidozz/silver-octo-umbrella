const {Client, Interaction} = require("discord.js");
module.exports = {
    name: 'role-dev-button',
    /**
     * 
     * @param {Client} client 
     * @param {Interaction} interaction 
     */
    async runInteraction(client, interaction) {
	if(!interaction.member.roles.cache.has("1006399572106559550")){
            let role = await interaction.member.roles.add("1006399572106559550")
            await interaction.reply({ content: `Vous venez de rejoindre les Développeurs`, ephemeral: true });
        }else{
            let role = await interaction.member.roles.remove("1006399572106559550")
            await interaction.reply({ content: `Vous venez de quitter les Développeurs`, ephemeral: true });
        }
    }
};