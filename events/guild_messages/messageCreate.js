const ownerId = '466673362748440579';
const prefix = "!";

module.exports = {
    name: "messageCreate",
    once: false,
    async execute(client, message) {
        let guildSettings = await client.getGuild(message.guild);

        if (!guildSettings) {
            await client.createGuild(message.guild);
            guildSettings = await client.getGuild(message.guild);
            return message.reply('le bot a mis à jour la base de données pour votre serveur, retapez la commande!');
        }

        if(message.author.bot) return;

        if(!message.content.startsWith(prefix)) return;

        const args = message.content.slice(prefix.length).trim().split(/ +/g);
        const cmdName = args.shift().toLowerCase();

        if(cmdName.length === 0)return;

        let cmd = client.commands.get(cmdName);

        if(!message.member.permissions.has({permission: cmd.permissions})) return message.reply(`[❌] Vous n'avez pas la/les permission(s) requise(s) (\`${cmd.permissions.join(", ")}\`) pour effectuer cette command`)

        if(cmd) cmd.run(client, message, args)
    },


};
