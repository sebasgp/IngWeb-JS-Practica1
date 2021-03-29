const año = document.querySelector("#input-bisiesto")

año.addEventListener("change", mostrarResultado) 


function mostrarResultado(){
    
    const resultado = document.querySelector("#resultado");
    const result = bisiesto();
    resultado.innerHTML = result;
    console.log(result);    
}

function bisiesto(){
    const añoBisiesto = año.value;
    let esBisiesto = false;
    if(añoBisiesto < 1 || añoBisiesto % 1 !== 0 || isNaN(añoBisiesto)){
        esBisiesto = false;
        return "El numero ingresado no corresponde a un año"
    }
    resultado.value="";
    if(añoBisiesto % 4 == 0 ){
        if(añoBisiesto % 100 == 0){
            if(añoBisiesto % 400 == 0){
                añoBisiesto = true
            }
        }else{
            esBisiesto = true;
        }
    }   
    return esBisiesto ? "El año ingresado es un año bisiesto" : "El año ingresado no es un año bisiesto"
}