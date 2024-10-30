module.exports = {
    name:"unlock",
    aliases:["kilitaç", "kilit-aç", "kilit aç"],
    code:`
    $modifyChannelPerms[$channelID;+sendmessages;$guildID]
    $onlyAdmin[Yetkin Yok Dostum!]
    başarılı şekilde kanal kilidini açtım!`
}