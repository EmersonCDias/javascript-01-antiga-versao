var addPacient = document.querySelector("#adicionar-paciente")

addPacient.addEventListener("click", function(e){

    e.preventDefault();

    var inputName = document.querySelector("#campo-nome");
    var inputWeight = document.querySelector("#campo-peso");
    var inputHeight = document.querySelector("#campo-altura");

    var newPacient = 
        "<tr class='paciente'>" + 
            "<td class='info-nome'>" + inputName.value + "</td>" +
            "<td class='info-peso'>" + inputWeight.value  + "</td>" +
            "<td class='info-altura'>" + inputHeight.value + "</td>" +
            "<td class='info-imc'>" + inputWeight.value / (inputHeight.value * inputHeight.value) + "</td>" +
        "</tr>";

    var table = document.querySelector("table");
    table.innerHTML += newPacient;

    inputName.value = "";
    inputWeight.value = "";
    inputHeight.value = "";
});