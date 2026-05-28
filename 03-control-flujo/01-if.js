let peso = 50;

if (peso >= 15 && peso < 20)
	console.log('Tu peso esta por debajo del promedio');
else if (peso >= 20 && peso < 40)
	console.log('Tu peso esta en el promedio');
else
	console.log('Tu peso esta por encima del promedio');

//ciclo while

console.log('Numeros del 0 al 10')
let i = 0;

while (i <= 10)
{
	console.log(i);
	i++;
}

//str_len

function str_len(str)
{
	let i;

	i = 0;
	while (i < 5)
		i++;
	return(i);
}
let string = 'probando';

let len = str_len(string);
console.log(len);
