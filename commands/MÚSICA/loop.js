module.exports = {
 name: "loop",
 aliases: ['repeat'],
 code: `
 $if[$message[1]==song]
 $loopSong
 $title[Loop Manager]
 $description[Now looping the current song playing!]
 $author[RobyCord;https://cdn.discordapp.com/avatars/804798270165352479/4ff002a3a27f782a00c5373f2e88e18c.png?size=128]
 $color[#E5E5E5]
 
 $elseIf[$message[1]==queue]
 $loopQueue
 $title[Loop Manager]
 $description[Now looping the queue!]
 $author[RobyCord;https://cdn.discordapp.com/avatars/804798270165352479/4ff002a3a27f782a00c5373f2e88e18c.png?size=128]
 $color[#E5E5E5]
 $endelseIf
 $elseIf[$message[1]==stop]
 $loopSong
 $title[Loop Manager]
 $description[Sucessfuly paused the loop status!]
 $endelseIf
 $elseIf[$message[1]==stopq]
 $loopQueue
 $title[Loop Manager]
 $description[Sucessfuly paused the loop status!]
 $endelseIf
 $endif
 $argsCheck[>1;Please provide something to loop (song or queue)!]
 `
 
  
}