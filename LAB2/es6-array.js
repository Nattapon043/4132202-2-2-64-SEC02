let cars = ["Toyota","Honda","Mazda"];
let fruit = [];
fruit[0] = "Apple";
fruit[3] = "Mango";
let rname = new Array("Yellow","SeaRueang","Mamuang");
console.log(rname);

let popCar = cars.pop();
console.log(popCar);
console.log(cars);

cars.unshift("Kubota");
console.log(cars);
cars.shift();
console.log(cars);

cars.splice(1,0,"Honda","Mazda");
console.log(cars);

const carSlide = cars.slice(1,2);
console.log(carSlide);

const newArr = cars.concat(rname);
console.log(newArr);
const newArr2 = [...cars,...rname];
console.log(newArr2);

console.log(newArr.toString());

//itteration//
let text ="";
for(value of rname){
text += value + ":"
}
console.log(text);

const number = [10,20,30]
number.forEach(addNum)

function addNum(value,index,array){
    console.log(value + 2);
}

const ns = number.map(addNumMap)
console.log(ns);
function addNumMap(value){
    return value * 2;    
}
const over10 = number.filter(over10fn);
console.log(over10)
function over10fn(value){
    return value > 10;
}

const reOver10 = number.reduce(over10fn);
console.log(reOver10);

const everyOver10 = number.every(over10fn);
console.log(everyOver10);
const someOver10 = number.some(over10fn);
console.log(someOver10);

let resfind = number.find(over10fn);
console.log(resfind);
let resfindindex = number.indexOf(over10fn);
console.log(resfindindex);

let alphab = Array.from("ABCDefG0123");
console.log(alphab);