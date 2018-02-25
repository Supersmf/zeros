module.exports = function getZerosCount(number) {
  let count = 0;
    let num = number;
    let divide = () => 1 <= (num / 5);


    while (divide()) {
        num = Math.floor(num / 5);
        count += num;
    }
    return count;
}

/*function getZerosCount(number) {
	let count = 0;*/

/*	let factorial = (n) => {
		return (n != 1) ? n * factorial(n - 1) : 1;
	}*/

/*function sFact(num) {
		var rval = 1;
		for (var i = 2; i <= num; i++)
			rval = rval * i;
		return rval;
	}
	console.log(sFact(number))
	// let res = String(sFact(number));
	let pos = res.indexOf(0);

	while (pos !== -1) {
		count++;
		pos = res.indexOf('0', pos + 1);
	}

	return count;
}*/

/*function getZerosCount(number) {

    let count = 0;
    let num = number;
    let divide = () => 1 <= (num / 5);


    while (divide()) {
        num = Math.floor(num / 5);
        count += num;
    }
    return count;
}

console.log(getZerosCount(84583674))*/