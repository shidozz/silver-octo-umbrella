const { MessageEmbed, Client, Interaction } = require("discord.js")
const { readdirSync } = require('fs');
const commandFolder = readdirSync('./commands');
const {Axios, default: axios} = require('axios');
const config = require("../../config.json")

module.exports = {
    name: 'twitch',
    category: 'test',
    permissions: ['SEND_MESSAGES'],
    ownerOnly: false,
    usage: 'twitch <Pseudo>',
    examples: ['twitch shidozzmusic_', 'twitch breezzia', 'twitch devgirl_'],
    description: "Renvoie si oui ou non un streameur est en live",
    options: [
        {
            name: 'pseudo',
            description: 'Taper le nom de la chaine twitch',
            type: 'STRING',
            required: true
        }
    ],
    async run(client, message, args) {
	
    },
    /**
     * 
     * @param {Client} client 
     * @param {Interaction} interaction 
     */
    async runInteraction(client, interaction) {
        const channelName = interaction.options.getString('pseudo');
        await axios.get("https://api.twitch.tv/helix/users?login=" + channelName, {headers:{"Authorization": config.twitch.token,"Client-Id": "w6cp33v89t3d1en98ygrd8kx53krwn"}}).then(rsp => {
            console.log("RSP : " + rsp.data.data[0].id);
            
            if(rsp.data.data[0]){
                axios.get(`https://api.twitch.tv/helix/streams?user_id=${rsp.data.data[0].id}`, {headers: {"Authorization": config.twitch.token, "Client-Id": "w6cp33v89t3d1en98ygrd8kx53krwn"}}).then(response => {
                    console.log("Streams Data: " + JSON.stringify(response.data.data[0] ? response.data.data[0] : `${channelName} n'est pas en live !`))
                    if(response.data.data[0])
                        try{
                            return interaction.reply(`${channelName} est en live !`);
                        }catch(err){
                            interaction.channel.bulkDelete(1);
                            return interaction.channel.send(`${channelName} est en live !`);
                        }
                    else{
                        try{
                            return interaction.reply(`${channelName} n'est pas en live !`);
                        }catch(err){
                            interaction.channel.bulkDelete(1);
                            return interaction.channel.send(`${channelName} n'est pas en live !`);
                        }
                    }
                })
            }else{
                return interaction.reply(`${channelName} n'éxiste pas !`)
            }

        })
        
    }
};