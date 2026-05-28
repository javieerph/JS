function saludar ()
{	
	console.log('Hola mundo');
}

saludar();

function suma ()
{
	return 2 + 2;
}

let resultado = suma();
console.log(resultado);

function mult (a, b)
{
	console.log(arguments);
	return a * b;
}

let res = mult(3, 6);
console.log(res);
