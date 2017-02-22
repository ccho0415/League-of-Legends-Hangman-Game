// global Variables
var champArr =['AATROX','AHRI','AKALI','ALISTAR','AMUMU','ANIVIA','ANNIE','ASHE','AURELION SOL','AZIR','BARD','BLITZCRANK','BRAND','BRAUM','CAITLYN','CAMILLE','CASSIOPEIA','CHOGATH','CORKI','DARIUS','DIANA',
'DRAVEN','DR MUNDO','EKKO','ELISE','EVELYNN','EZREAL','FIDDLESTICKS','FIORA','FIZZ','GALIO','GANGPLANK','GAREN','GNAR','GRAGAS','GRAVES','HECARIM','HEIMERDINGER','ILLAOI','IRELIA','IVERN','JANNA','JARVAN IV',
'JAX','JAYCE','JHIN','JINX','KALISTA','KARMA','KARTHUS','KASSADIN','KATARINA','KAYLE','KENNEN','KHAZIX','KINDRED','KLED','KOGMAW','LEBLANC','LEE SIN','LEONA','LISSANDRA','LUCIAN','LULU','LUX','MALPHITE',
'MALZAHAR','MAOKAI','MASTER YI','MISS FORTUNE','WUKONG','MORDEKAISER','MORGANA','NAMI','NASUS','NAUTILUS','NIDALEE','NOCTURNE','NUNU','OLAF','ORIANNA','PANTHEON','POPPY','QUINN','RAMMUS','REK SAI','RENEKTON',
'RENGAR','RIVEN','RUMBLE','RYZE','SEJUANI','SHACO','SHEN','SHYVANA','SINGED','SION','SIVIR','SKARNER','SONA','SORAKA','SWAIN','SYNDRA','TAHM KENCH','TALIYAH','TALON','TARIC','TEEMO','THRESH','TRISTANA',
'TRUNDLE','TRYNDAMERE','TWISTED FATE','TWITCH','UDYR','URGOT','VARUS','VAYNE','VEIGAR','VEL KOZ','VI','VIKTOR','VLADIMIR','VOLIBEAR','WARWICK','XERATH','XIN ZHAO','YASUO','YORICK','ZAC','ZED','ZIGGS','ZILEAN','ZYRA']
var alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",
               "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var key = "";
var guesses = [];
var currentWord = [];
// jquery div calls
var blanks = $("#blanks")
//functions
// generate a new Champion Word
function game(){
	var num = Math.floor(Math.random(champArr)*champArr.length); //random number
	var display = ""; //Initially declaring display
	let word= champArr[num]; //Initially declaring word
	let currentWord = word.split(""); //Splitting word as an array
	console.log(currentWord); //Console logging
		currentWord.forEach(function(element){ //for each item in the splitted word array
			if(element === " "){ //if there is a blank
				display += " "; //show a blank
			}else{ //otherwise
				display += " _ "; //show an underscore
			}
		});
		blanks.text(display); // grab the blanks div and display the blanks
	document.onkeyup=function(event){ //start this function when there is a keystroke
		var k = event.key; //variable for the key input
		var key = k.toUpperCase();
		if (alphabet.indexOf(key) !== -1){ //if it is within the alphabet index
			console.log(alphabet.indexOf(key));
			if (guesses.indexOf(key) !== -1){ //if it has already been guessed
				alert("You already guessed that!");
			}else{
				guesses.push(key);
				if (currentWord.indexOf(key)!==-1){
					console.log("correct");
				}else{
					console.log("incorrect");
				}
			}
		}else{
			alert("That is not a valid guess");
		}
		var display = " ";
		for (var i=0; i< currentWord.length; i++){
			if(guesses.indexOf(currentWord[i]) !== -1){
				display += currentWord[i];
			}else if (currentWord[i] == " "){
				display += " ";
			}else{
				display += " _ ";
			}
		}
		blanks.text(display); // grab the blanks div and display the blanks
	}
}

game();