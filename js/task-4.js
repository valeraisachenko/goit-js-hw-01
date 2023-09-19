let elementWidth = '50px';
elementWidth = Number.parseInt(elementWidth);
console.log("elementWidth :", elementWidth);

let elementHight = '200.25px';
elementHight = Number.parseFloat(elementHight);
console.log('elementHight :', elementHight);


let salary = 1358.258;
salary = Number(salary.toFixed(2));
// salary = Number(salary);

console.log(salary);

let quantity = '30';
let value = 'эту строку не возможно привести к числу';

console.log(Number(value));

console.log(Math.PI)

// const base = 2;
// const paver = 0.5;

// const result = Math.pow(base, paver);

// console.log(2 ** 0.5)


// let base = prompt('давай число');
// base = Number(base);

// console.log(base);

// let power = prompt('давай степень');
// power = Number(power);

// console.log(power);

// const result = base ** power;

// console.log(result);

const max = 50;
const min = 30;

const result = Math.round(Math.random() * (max - min) + min);

console.log(result);



