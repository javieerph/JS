//ciclo for
/*
for(let i = 0;i < 10;i++)
{
	if(i % 2 == 0)
		console.log(i);
}
*/

//ciclo for of

let animales = ['vaca', 'perro', 'gallo', 'cerdo'];

console.log('Ciclo while');
let i = 0;
while(animales[i] != undefined)
{
	console.log(animales[i]);
	i++;
}

console.log('ciclo for')
for(let y = 0;animales[y] != undefined;y++)
	console.log(animales[y]);

console.log('ciclo for of')
//for(let "nombre del elemento" of "nombre del array")

for(let animal of animales)
	console.log(animal);

//ciclo for in
//se usa para imprimir las propiedades de un objeto
console.log('ciclo for in')

let user = {
	id: 152,
	name: 'Pedro Rodriguez',
	age: 26,
};

for(let prop in user)
{
	console.log(prop, user[prop]);
}
	console.log(user['name']);

for(let indice in animales)
	console.log(indice, animales[indice]);

