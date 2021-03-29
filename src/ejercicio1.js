const alfabeto = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];




const texto = document.querySelector("#input-pangrama")

texto.addEventListener("change", mostrarResultado) 


function mostrarResultado(){
    
    const resultado = document.querySelector("#resultado");
    const result = pangrama();
    resultado.innerHTML = result;
    console.log(result);
}

function pangrama(){
    const text = texto.value;
    let esPangrama = true;
    const textLowerCase = text.toLocaleLowerCase();
    document.querySelector('#input-pangrama').value="";
    for(let i = 0 ; i < alfabeto.length ; i++){
        if(!(textLowerCase.includes(alfabeto[i]))){
            esPangrama = false;
            break;
        }
    }
    return esPangrama ? "El texto ingresado es un pangrama" : "El texto ingresado no es un pangrama"
}
