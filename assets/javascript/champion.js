var champions = require('lol-champions');
champions.forEach(function(element){
	var capitialize = element.name.toUpperCase();
console.log("'"+capitialize+"',");
});