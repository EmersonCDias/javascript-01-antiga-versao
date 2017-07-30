var btnCalculateIMC = document.querySelector("#calcula-imcs");

btnCalculateIMC.addEventListener("click", function(){

    var pacientList = document.querySelectorAll(".paciente");
    
    throughArray(pacientList, function(i){
        var nameDOM = i.querySelector(".info-nome");
        var weightDOM = i.querySelector(".info-peso");
        var heightDOM = i.querySelector(".info-altura");

        var pacient = {
            name : nameDOM.textContent,
            weight : weightDOM.textContent,
            height : heightDOM.textContent,
            imcResult : function(){
                if(this.weight > 0 && this.height > 0){
                    imc = this.weight / (this.height * this.height);
                    return imc;
                }
            }
        };

        var imc = pacient.imcResult();
        var imcDOM = i.querySelector(".info-imc");
        imcDOM.textContent = imc;
    });
});