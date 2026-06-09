let array = [2, 5, 7, 15, -5, -100, 55];
/*
function getMenorMayor(arr)
{
	let i = 1;
	let res = [0, 0];

	res[0] = array[0];
	while(arr[i] != undefined)
	{
		if(res[0] > arr[i])
			res[0] = arr[i];
		i++;
	}

	i = 1;
	res[1] = array[0]
	while(arr[i] != undefined)
	{
		if(res[1] < arr[i])
			res[1] = arr[i];
		i++;
	}
	return res;
}*/

function getMenorMayor(arr)
{
	let menor = arr[0];
	let mayor = arr[0];

	for(numero of arr)
	{
		menor = menor < numero ? menor : numero;
		mayor = mayor > numero ? mayor : numero;
	}
	return [menor, mayor];
}

let numeros = getMenorMayor(array);
console.log(numeros);
