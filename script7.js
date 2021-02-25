console.log("Yo mec kes tu mveu ?")

reponse = prompt("kes y a ")

if (reponse[reponse.length - 1] == "?"){
	alert("oeoe")



}else if (reponse.match(/^[^a-z]+$/)) {  // match les majsuculepar la négation début et fin texte
    alert("Pwa, calme-toi...")

}else if (reponse.includes ("fortnite")){
	alert("On se fait une partie ?")

}else if(reponse == ""){
	alert("t'es en PLS ?")

}else {
	alert("balekouilles frere")
}
