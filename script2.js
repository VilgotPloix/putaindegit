let nombre = prompt("tu veux la facto de quel nombre ?");

function facto(nombre){
	nombre2 = 1; 

	for(let i = nombre; i > 1; i--){
		nombre2 = nombre2 * i;
	}
	return nombre2
}

console.log(`la factorielle de ${nombre} est : ${facto(nombre)}`);
