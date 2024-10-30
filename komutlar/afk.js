module.exports = {
    name:"afk",
    aliases:["afk-ol"],
    code:`
    $changeUsernameWithID[$authorID;
    [AFK] $username]
    $awaitFunc[afk]
    afk oldun dostum! $onMentionMessage
    $setUserVar[afk;on;$authorID]
    $suppressErrors[Bir Hata Var!]`
}