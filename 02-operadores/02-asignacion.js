//operadores de asignacion

let b = 42;

b += 5;

console.log(b);

//operadores de comparacion
//relacionales

let a = 10;

console.log('operadores relacionales');
console.log(a > 5);
console.log(a >= 5);
console.log(a < 5);
console.log(a <= 5);

//de igualdad, doble == pregunta si los valores son iguales
//no si los tipos tambien lo son.

console.log('operadores de igualdad');
console.log(a == 10);
console.log(a == '10');
console.log(a === '10');
console.log(a !== '10');

//operadores logicos
//compara lo que esta a la izquierda con a derecha.

console.log('operadores logicos');
console.log(true && true);

let mayor = true;
let suscrito = true;
console.log('operador and', mayor && suscrito);
console.log('operador or', mayor || suscrito);
console.log('operador not', !mayor);
