/*Crear un array de longitud N y que sus elementos
 * sean numeros del 1 hasta el N.*/

let longitud = 7;

function crearArray(n)
{
	if(n <= 0)
		return [];
	let i = 0;
	let array = [];
	while(i < n)
	{
		array[i] = i + 1;
		i++;
	}
	return array;
}

let resultado = crearArray(longitud);
console.log(resultado);
