/*
poo/ pob:lgg manana objet efa azy manokana=obj  natif
jq: manafoy syntaxe
*/
//console.log($(document))
let input = $(".input");         //input1+input2
let inputOne = $("#input_one");
let inputTwo = $("#input_two");
let signe = $("select");
let errorOne = $("#error_one"); 
let errorTwo = $("#error_two"); 
//console.log(error)

//evenement
input.on("keyup", function() {
    //console.log(this);
    let signeValue = signe.val();
    let inputOneValue = inputOne.val();
    let inputTwoValue = inputTwo.val();
    //console.log(errorValue);

    if ( isNaN(inputOneValue)) {
        errorOne.text("Votre nombre n'est pas valide")
        //error.innerText = "votre nombre n est pas valide"
       // error.style.color = "red"
    }
    if ( isNaN(inputTwoValue)) {
        errorTwo.text("Votre nombre n'est pas valide")
    }

    if ( signeValue === "+") {
        var resultat = parseInt(inputOneValue) + parseInt(inputTwoValue)
    }
    if (signeValue === "-") {
        var resultat = inputOneValue - inputTwoValue
    }
    if (signeValue === "*") {
        var resultat = inputOneValue * inputTwoValue
    }
    if (signeValue === "/") {
        var resultat = inputOneValue / inputTwoValue
    }
  
    //$("#error").text(error)
    $("span").val(resultat)        //raha span ny html
    $("#resultat").val(resultat)
    //console.log(resultat)
});
