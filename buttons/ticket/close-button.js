const { MessageEmbed, Interaction } = require("discord.js");
const { runInteraction } = require("./ticket-button");


module.exports = {
    name: 'close-button',
    async runInteraction(client, interaction,) {
        if(interaction.member.permissions.has(['MANAGE_MESSAGES'])) {
            if(!interaction.channel.name.includes('ticket')) {
                const NULL_TICKET = new MessageEmbed()
                .setColor('#0099ff')
                .setTitle('**Ticket**')
                .setDescription(`⛔ - Vous ne vous trouvez pas dans un ticket.`)
                .setTimestamp()
    
                interaction.channel.send({ embeds: [NULL_TICKET] });
            } else {
                const SUPPR = new MessageEmbed()
                .setColor('#0099ff')
                .setTitle('**Ticket**')
                .setDescription(`Suppression du ticket dans quelques secondes...`)
                .setTimestamp()
    
                interaction.channel.send({ embeds: [SUPPR] });
                setTimeout(() => {
                    interaction.channel.delete()
                }, 2500)
            }
        } else {
            const NULL_PERMS = new MessageEmbed()
            .setColor('#0099ff')
            .setTitle('**Ticket**')
            .setDescription(`⛔ - Tu n'as pas la permissions d'executer cette commandes.`)
            .setTimestamp()
    
            interaction.channel.send({ embeds: [NULL_PERMS] });
        }
    }
}
