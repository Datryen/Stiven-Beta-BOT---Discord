module.exports= {
  name:"reverse-text",
  code:`
  $nomention
$argsCheck[>1;:Error: **Diga uma frase/palavra com o comando para inverter!**]
$title[<:emoji_30:839588463002386433>  | Stiven Reverse text]
$textSplit[$message;]
$color[FF8725]
$description[$replaceText[$replaceText[$checkCondition[$argCount[$message]>1];false;**Texto original:**;1];true;**Frase original:**;1]
\`$message\`

<:emoji_18:831986705367564308> **|** O texto foi colocado ao contrário, o resultado da sua mensagem é:
\`$toLowercase[$splitText[100]$splitText[99]$splitText[98]$splitText[97]$splitText[96]$splitText[95]$splitText[94]$splitText[93]$splitText[92]$splitText[91]$splitText[90]$splitText[89]$splitText[88]$splitText[87]$splitText[86]$splitText[85]$splitText[84]$splitText[83]$splitText[82]$splitText[81]$splitText[80]$splitText[79]$splitText[78]$splitText[77]$splitText[76]$splitText[75]$splitText[74]$splitText[73]$splitText[72]$splitText[71]$splitText[70]$splitText[69]$splitText[68]$splitText[67]$splitText[66]$splitText[65]$splitText[64]$splitText[63]$splitText[62]$splitText[61]$splitText[60]$splitText[59]$splitText[58]$splitText[57]$splitText[56]$splitText[55]$splitText[54]$splitText[53]$splitText[52]$splitText[51]$splitText[50]$splitText[49]$splitText[48]$splitText[47]$splitText[46]$splitText[45]$splitText[44]$splitText[43]$splitText[42]$splitText[41]$splitText[40]$splitText[39]$splitText[38]$splitText[37]$splitText[36]$splitText[35]$splitText[34]$splitText[33]$splitText[32]$splitText[31]$splitText[30]$splitText[29]$splitText[28]$splitText[27]$splitText[26]$splitText[25]$splitText[24]$splitText[23]$splitText[22]$splitText[21]$splitText[20]$splitText[19]$splitText[18]$splitText[17]$splitText[16]$splitText[15]$splitText[14]$splitText[13]$splitText[12]$splitText[11]$splitText[10]$splitText[9]$splitText[8]$splitText[7]$splitText[6]$splitText[5]$splitText[4]$splitText[3]$splitText[2]$splitText[1]]\`]
$botTyping
$suppressErrors[**Diga uma frase/palavra com o comando para inverter!**]`

  
}