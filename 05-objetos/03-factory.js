//usuario creado a partir de una variable.

/*let user = {
	id: 1,
	email: 'edgar123@hotmail.com',
	name: 'Edgar',
	activo: true,
	recuperarClave: function recuperarClave(){
		console.log('Recuperando clave...');
	},
};
*/
//las factory functions deben usar camelcase
//generalmente comienzan con crear o create.

function crearUsuario(name, email)
{
	return {
		email,
		name,
		activo: true,
		recuperarClave: function recuperarClave(){
			console.log('Recuperando clave...');
		},
	};
}

let user1 = crearUsuario('Pepito', 'pepito@gmail.com');
let user2 = crearUsuario('Shakira', 'shaki@hotmail.com');

console.log(user1, user2);
