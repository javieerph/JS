//vamos a crear un objeto con:
//{ id: 1, recuperarClave: function recuperarClave(){}}

function Usuario()
{
	this.id = 1;
	this.recuperarClave = function recuperarClave(){
		console.log('Recuperando clave...');
	}
}

let usuario = new Usuario();

console.log(usuario);
