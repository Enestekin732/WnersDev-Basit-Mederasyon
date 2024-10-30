module.exports = {
    name:"unafk",
    aliases:["afk-çık"],
    code:`
    $changeUsernameWithID[$authorID;
    [AFK] $username]
    $awaitFunc[afk]
    afk değilsin dostum! $onMentionMessage
    $setUserVar[afk;no;$authorID]
    $suppressErrors[Bir Hata Var!]`
}