module.exports = {
    name:"unban",
    aliases:["yasak-kaldır", "yasakkaldır"],
    code:`
    $unbanID[$message]
    $onlyAdmin[Yetkin Yok Dostum!]
    $argsCheck[1;Bir Id Yaz!]
    $description[**$message** banını kaldırdım!]`
}