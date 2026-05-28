/*
let i = 0;

while(i < 10)
{
	if(i % 2 == 0)
		console.log('Numero par', i);
	i++;
}

console.log('Fuera del while');

do 
{
	if(i % 2 == 0)
		console.log('Numero par', i);
	i++;
}
while(i < 10);
*/
function str_len(str)
{
	let i;
	
	i = 0;
	while(str[i] != undefined)
		i++;
	return(i);
}

let string = 'probando';

let len = str_len(string);
console.log(len);

