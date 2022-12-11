const { Guild } = require('../../models/index');

module.exports = {
    name: 'update',
    category: 'admin',
    permissions: ['ADMINISTRATOR'],
    ownerOnly: true,
    usage: 'update',
    examples: ['update'],
    description: 'Mettre a jours les nouvelles données',
    async run(client, message, args) {
        await Guild.updateMany({}, { "$set": { "testChannel": "1012704976440668292" }, upsert: true });
        message.reply('Nouvelles données ajoutées !')
    },
   
    async runInteraction(client, interaction) {
        await Guild.updateMany({}, { "$set": { "testChannel": "1012704976440668292" }, upsert: true });
        interaction.reply('Nouvelles données ajoutées !')
    }
};