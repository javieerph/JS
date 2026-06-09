function ft_lenght(str)
{
	let i = 0;
	while(str[i] != undefined)
		i++;
	return i;
}

function getByIdx(arr, idx)
{
	let len = ft_lenght(arr);

	if(idx >= 0 && idx <= len - 1)
	{
		return arr[idx];
	}
	else
		return('please enter a valid index');
}

let resultado = getByIdx([1, 2, 4, 5], -2);
console.log(resultado);

