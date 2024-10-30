module.exports = {
    name:"lock",
    aliases:["Lock", "kilitle"],
    code:`
    $modifyChannelPerms[$channelID;-sendmessages;$guildID]
    $onlyAdmin[Yetkin Yok Dostum!]
    başarılı şekilde kanal kilitledim!
    `
}