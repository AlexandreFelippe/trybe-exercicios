const sum = (... numbers) => numbers.reduce(((acc, num) => acc + num), 0);
console.log(sum(4, 5, 6))