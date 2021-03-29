const numeroEntero = document.querySelector("#input-numeroEntero")

numeroEntero.addEventListener("change", mostrarResultado)

function mostrarResultado(){
    
    const resultado = document.querySelector("#resultado");
    const result = intToRoman(parseInt(numeroEntero.value));
    resultado.innerHTML = result;
    console.log(result);    
}

function intToRoman(n) {
	
	let	values = [1, 5, 10, 50, 100, 500, 1000];
	let	letras = ['I', 'V', 'X', 'L', 'C', 'D', 'M'];
	let	res = [];
	let	num;
    let letra;
    let val;
    let pos;
    let insert;

	for(var i = 6; num = values[i], letra = letras[i]; i--) {
		// Suficientemente grande
		if(n >= num) {
			// Número de letras repetidas
			var r = Math.floor(n / num); 

			// Restamos el actual
			n -= r * num; 

			if(r < 4){
				// Metemos las letras
				while(r--){
					res.push(letra);
				}
			} else {
				// No se pueden repetir 4+ veces
				val = res.pop(); // Última letra

				// Si es el string vacío o letra == "M" (no hay anterior)
				// usamos la letra anterior a esta
				pos = (val ? letras.indexOf(val) : i) + 1; 

				// Y si letra == "M" -> letras[pos] no existirá y usamos M
				insert = letra + (letras[pos] || 'M'); 

				// Insertamos el string
				res.push(insert);
			}
		} else {
			// Si no vamos a poner letra usamos un ""
			// para que no afecte pop
			res.push('');
		}
	}

	return res.join('');
}

