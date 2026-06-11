function Robot (id, name){
	this.id = id;
	this.name = name;
}

console.log(Robot.id);
console.log(Robot.length);

console.log('Instancia de la funcion Robot');

const R = Robot;
let factory = new R('2322', 'Robotina');

console.log(factory);

console.log('Pasar funcion como argumento');

function of(Fn, arg1, arg2)
{
	return new Fn(arg1, arg2);	
}

let doblador = of(Robot, '1235', 'bender');
console.log(doblador);

console.log('retornar una funcion dentro de otra funcion');

function returned()
{
	return function() {
		console.log('Hola mundo');
	}
}

//al crear saludo, esta variable se comporta como funcion

let saludo = returned();
saludo();
