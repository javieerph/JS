//funcion creada clasicamente

function Punto(x, y)
{
	this.x = x;
	this.y = y;
	this.dibujar = function() {
		console.log('Dibujando...i');
	};
}

//funcion usando el constructor function

const Point = new Function('x', 'y', 'this.x = x;this.y = y; this.dibujar = function() {console.log(\'Dibujando...i\');};');

const p = new Point(1, 2);
console.log(p);
