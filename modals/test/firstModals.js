const { Modal, showModal } = require('discord-modals')
const {Client, Interaction} = require('discord.js');


module.exports = {
    name: 'modal-customid',
    /**
     * 
     * @param {Client} client 
     * @param {Interaction} interaction 
     */
    async runInteraction(client, interaction) {
        if(interaction.isModalSubmit()){
            if(interaction.customId === "modal-customid")
            interaction.reply('modals send')
        }
    },
};