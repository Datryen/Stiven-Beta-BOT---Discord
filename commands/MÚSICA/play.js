module.exports= {
name: "play",
 aliases: ['p'],
 code: `
$ color [RANDOM]
$ thumbnail [$ jsonRequest [http://api.somecool.repl.co/yt-search?search=$message;thumbnail]]
$ title [** Canção adicionada à fila **]
$ description [** Adicionado com sucesso ** [$ songInfo [title] \\] ($ songInfo [url]) à ** Queue **]
$ addField [: cronômetro: | Duração:; ** __ $ jsonRequest [http://api.somecool.repl.co/yt-search?search=$message;duration] __ **]
$ addField [: dvd: | Visualizações:; ** __ $ jsonRequest [http://api.somecool.repl.co/yt-search?search=$message;views] __ **]
$ addField [: café: | Autor:; ** __ $ jsonRequest [http://api.somecool.repl.co/yt-search?search=$message;uploader_name] __ **]
$ addField [: clock10: Uploaded:; ** __ $ jsonRequest [http://api.somecool.repl.co/yt-search?search=$message;uploaded] __ **]
$ playSong [$ message; 1m; {title: Error} {description: ** ⛔ Ocorreu um erro ao fazer a solicitação **} {color: RED}]
  
}

