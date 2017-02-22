var champArr =['Aatrox','Ahri','Akali','Alistar','Amumu','Anivia','Annie','Ashe','Aurelion Sol','Azir','Bard',
'Blitzcrank','Brand','Braum','Caitlyn','Camille','Cassiopeia','ChoGath','Corki','Darius','Diana','Draven','Dr Mundo','Ekko','Elise','Evelynn','Ezreal','Fiddlesticks','Fiora','Fizz','Galio',
'Gangplank','Garen','Gnar','Gragas','Graves','Hecarim','Heimerdinger','Illaoi','Irelia','Ivern','Janna','Jarvan IV','Jax','Jayce','Jhin','Jinx','Kalista','Karma','Karthus','Kassadin','Katarina',
'Kayle','Kennen','Kha Zix','Kindred','Kled','Kog Maw','LeBlanc','Lee Sin','Leona','Lissandra','Lucian','Lulu','Lux','Malphite','Malzahar','Maokai','Master Yi','Miss Fortune','Wukong','Mordekaiser',
'Morgana','Nami','Nasus','Nautilus','Nidalee','Nocturne','Nunu','Olaf','Orianna','Pantheon','Poppy','Quinn','Rammus','Rek Sai','Renekton','Rengar','Riven','Rumble','Ryze','Sejuani','Shaco','Shen','Shyvana',
'Singed','Sion','Sivir','Skarner','Sona','Soraka','Swain','Syndra','Tahm Kench','Taliyah','Talon','Taric','Teemo','Thresh','Tristana','Trundle','Tryndamere','Twisted Fate','Twitch','Udyr','Urgot','Varus',
'Vayne','Veigar','Vel Koz','Vi','Viktor','Vladimir','Volibear','Warwick','Xerath','Xin Zhao','Yasuo','Yorick','Zac','Zed','Ziggs','Zilean','Zyra'];
var num = Math.floor(Math.random(champArr)*champArr.length);
let word= champArr[num];
let champSplit = word.split("");
