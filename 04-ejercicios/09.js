/*Crear algoritmo que tome un array 
 * de pares y devuelva un array
 * de objetos lo contario a 08*/

let pairs = [
	[1, {name: "Nicolas"}],
	[2, {name: "Felipe"}],
	[3, {name: "Chanchito"}],
];

function toCollection(arr)
{
	let objetos = [];
	for(idx in arr)
	{
		let elemento = arr[idx];
		objetos[idx] = elemento[1];
		objetos[idx].ID = elemento[0];
	}
	return objetos;
}

let resultado = toCollection(pairs);
console.log(resultado);
