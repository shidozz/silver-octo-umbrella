
const { MessageEmbed, MessageActionRow, MessageButton } = require('discord.js');

const buttons = new MessageActionRow()
    .addComponents(
        new MessageButton()
            .setCustomId('accept-button')
            .setLabel('Accepter')
            .setStyle('SUCCESS')
            .setEmoji('✅'),

        new MessageButton()
            .setCustomId('refuse-button')
            .setLabel('Refuser')
            .setStyle('DANGER')
            .setEmoji('👉')
    )

const welcomeEmbed = new MessageEmbed()
    .setColor('#0099ff')
    .setTitle(`**Réglement du serveur !**`)
    .setDescription(`Bienvenue parmis nous,\n\n Afin de visualiser les divers salons, merci de lire et validé le règlement.\n\n`)



module.exports = {
    name: 'welcome',
    category: 'admin',
    permissions: ['SEND_MESSAGES'],
    ownerOnly: true,
    usage: 'welcome',
    examples: ['welcome'],
    description: 'La commande welcome permet d\'envoyer l\'embed des règles',

    async runInteraction(client, interaction) {
        welcomeEmbed.setAuthor({name: client.user.username, iconURL: client.user.displayAvatarURL()})
        .setFooter({text:client.user.username, iconURL: client.user.displayAvatarURL()})
    	.addFields(
            { name: '**REGLE N° 1 :**', value: `\`Le respect et la rigueur sont  obligatoires` },
            { name: '**REGLE N° 2 :**', value: `\`Les propos racistes, homophobes ou discriminations qui auraient pour but d'insulter ou blesser quelqu'un,\n entraineront un ban définitif de ce serveur.\`` },
            { name: '**REGLE N° 3 :**', value: `\`Les publicités sont interdits sauf dans le salon ${client.channels.cache.get("1019716736209145936")}, pour tout partenariat il vous faudra ouvrir un ticket pour ainsi\n en parler avec l'administration.\`` },
            { name: '**REGLE N° 4 :**', value: `\`Toute forme de harcèlement entrainera un ban définitif.\`` },
            { name: '**REGLE N° 5 :**', value: `\`Toutes identifications inutiles sont interdites, nous prendrons des sanctions en fonction du caractère\n répétitif de cette infraction.\`` },
            { name: '**REGLE N° 6 :**', value: `\`Tout contenu à caractère violent (sang , cadavre ...) ou sexuel est interdit  , il peut y'avoir des mineurs dans ce serveur.\`` },
            { name: '**REGLE N° 7 :**', value: `\`Si une personne est en désaccord avec vous ne la forcez pas. \`` }
        )
        .setTimestamp()
        await interaction.reply({ embeds: [welcomeEmbed], components: [buttons] })
    },
};