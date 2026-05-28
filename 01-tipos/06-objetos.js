let personaje = {
	nombre: "Tanjiro",
	anime: "Demon ",
	edad: 16,
};

console.log(personaje['nombre']);
console.log(personaje.edad);

personaje.edad = 13;
personaje['edad'] = 42;
console.log(personaje['edad']);

let llave = 'edad';
personaje['llave'] = 21;

console.log(personaje['llave']);

delete personaje.anime;

console.log(personaje);
