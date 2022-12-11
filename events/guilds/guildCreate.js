module.exports = {
    name: "guildCreatee",
    once: false,
    async execute(client, guild) {
        await client.createGuild(guild);
    }
};