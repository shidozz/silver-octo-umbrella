const mongoose = require("mongoose");

const guildSchema = mongoose.Schema({
    id: String,
   prefix: { type: String, default: "!" },
   logChannel: { type: String, default: "906644723144491008" },
   ticketCategory: { type: String, default: "1028402291205750866" },
   ticketChannel: { type: String, default: "1028402329659125810" },
   messageChannel: { type: String, default: "906644703523536896" },
   testChannel: { type: String, default: "906644700625248286" }
});

module.exports = mongoose.model("Guild", guildSchema);
