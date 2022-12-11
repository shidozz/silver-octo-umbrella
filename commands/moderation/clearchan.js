const { Client, Interaction } = require("discord.js");

module.exports = {
    name: "clearchan",
    category: "moderation",
    permissions: ["MANAGE_MESSAGES"],
    ownerOnly: false,
    usage: "clearchan",
    examples: ["clearchan"],
    description: "Supprimer 1000 message dans un salon",
    /**
     * 
     * @param {Client} client 
     * @param {Interaction} interaction 
     */
    async runInteraction(client, interaction) {
      interaction.channel.bulkDelete(100)
      interaction.channel.bulkDelete(100) // 200
      interaction.channel.bulkDelete(100) // 300
      interaction.channel.bulkDelete(100) // 400
      interaction.channel.bulkDelete(100) // 500
      interaction.channel.bulkDelete(100) // 600
      interaction.channel.bulkDelete(100) // 700
      interaction.channel.bulkDelete(100) // 800
      interaction.channel.bulkDelete(100) // 900
      interaction.channel.bulkDelete(100).then(() => {
        interaction.reply("J'ai supprimer 1000 message 😝") // 1000
      })
    },
  };
  
    