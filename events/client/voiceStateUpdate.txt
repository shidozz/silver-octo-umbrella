const {Client, VoiceState} = require('discord.js');

module.exports = {
    name: "voiceStateUpdate",
    once: false,
    /**
     * @param {VoiceState} oldState ancien état
     * @param {VoiceState} newState nouvelle état
     * @param {Client} client bot
     */
    async execute(client, oldState, newState) {
        const { member, guild } = newState;
        const oldChannel = oldState.channel;
        const newChannel = newState.channel;
        const joinToCreate = "976613459842203668";

        if(oldChannel !== newChannel && newChannel && newChannel.id === joinToCreate) {
            const voiceChannel = await guild.channels.create(member.user.tag, {
                type: "GUILD_VOICE",
                parent: newChannel.parent,
                permissionOverwrites: [
                    {id: member.id, allow: ["CONNECT"]},
                    {id: guild.id, allow: ["CONNECT"]},
                ]
            });
            member.voice.setChannel(voiceChannel.id);
            await newChannel.permissionOverwrites.edit(member,{CONNECT: false});
            setTimeout(() => newChannel.permissionOverwrites.delete(member), 30 * 1000);
            
            return setTimeout(() => member.voice.setChannel(voiceChannel), 500);
        }
        if(oldChannel.members.size === 0 && oldChannel.isVoice() && oldChannel.name.includes("#")){
            oldChannel.delete("[-] " + client.user.username + " viens de supprimer le salon vocal !");
        }
    }
}