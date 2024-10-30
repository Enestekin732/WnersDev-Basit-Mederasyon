module.exports = {
    name:"ban",
    aliases:["yasakla", "yasak"],
    code:`
    $ban[$message]
    $argsCheck[>1;bir kullanıcı etiketle!]
    $onlyAdmin[Yetkin yok dostum!]
    $description[banladim: $message]`
}