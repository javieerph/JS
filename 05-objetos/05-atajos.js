/*manera clasica de crear un objeto

let obj = {};

//usando el metodo constructor

let obj = new Object();

 * Existen otros metodos:
 * new Array();
 * new String();
 * new Number();
 * new Boolean();
 * */

function Car(){
	this.brand = 'Ferrari';
	this.year = '2012';
	this.start = function startEngine(){
		console.log('Starting engine...');
	}
}

let car1 = new Car();
console.log(car1);
console.log(car1.constructor);

//al usar metodos para crear estos objetos, el resultado
//se comprota diferente a cerarlo directamente, ejemplo:

const s1 = "1 + 1";
const s2 = new String("1 + 1");
console.log(s1, s2);
