const lista = document.querySelector("#input-lista")

lista.addEventListener("change", mostrarResultado)
const resultado = document.querySelector("#resultado");

function mostrarResultado(){
    const listaSeparada = lista.value.split(",")
    const listaNumeros = listaSeparada.map((value) =>{
        return parseInt(value);
    })

    let valoresRepetidos = []
    for(let i = 0 ; i < listaNumeros.length ; i ++){
        for(let j = 0 ; j < listaNumeros.length; j++){
            if(listaNumeros[i] === listaNumeros[j] && i !==j){
                valoresRepetidos.push(listaNumeros[i])
            }        
        }
    }
    resultado.innerHTML = valoresRepetidos;

    console.log(valoresRepetidos)
}