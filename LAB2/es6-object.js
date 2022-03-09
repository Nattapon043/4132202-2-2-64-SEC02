let cars = {
    brand:"SEARUANG",
    color:"yelllow",
    year:2021,
    fullname: function(){
        return `${this.brand} : ${this.year}`;
        
    },
    fullNAME: () => {
        return `${cars.brand} : ${cars.year}`;
    },
};

cars.color = "blue";
console.log(cars.color);

const x = cars;
x.year = 2000;
console.log(cars.year);


const number = [10,20,30];
const [a,b] = number;
console.log(b);

const {brand,color,year:y,fullNAME} =cars;
console.log(y);
console.log(fullNAME());