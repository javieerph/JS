const user = {id: 1};

user.name = 'Nicolas';
user.guardar = function() {
	console.log('Guardando', user.name);
}

user.guardar();

delete user.name;
delete user.guardar;
console.log(user);

//si queremos que no se pueda cambiar un objeto .freeze
//si queremos que no se puedan cambiar solo sus propiedades
//pero valore si .seal

const user1 = Object.freeze({id: 1});
user1.name = 'Nico';
user1.id = 2;
console.log(user1);

//.seal
//name no existe por lo tanto no deja agregarla
//id si existe por lo tanto eja cambiarla
const user2 = Object.seal({id: 1});
user2.name = 'Nico';
user2.id = 2;
console.log(user2);
