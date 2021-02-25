nbetage = prompt("combien d'etages voulez vous ?");

let espace = " ";
let etage = "#";
let compte = nbetage

for(let index = 1; index <= nbetage; index ++){
	compte --
	console.log(espace.repeat(compte) + etage.repeat(index))
}