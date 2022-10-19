console.log("Exercitiul 1");
let car = {
    producer: "Fiat",
    type: "Punto",
    year: 2016,
    price: 7000,
    km: 123456,
}

car.km = 122000;
// console.log(car);

car.description = "Masina are culoarea alb.";
// console.log(car);
delete car.description;

console.log(car);


console.log("");


console.log("Exercitiul 2");

function tuneCar(car) {
    let car2 = Object.assign({}, car);
    car2.km = car2.km / 2;
    car2.price = car2.price * 1.5;

    return car2;
    
}

let carTwo =tuneCar(car);
console.log(carTwo);
// console.log(car);



console.log("");


console.log("Exercitiul 3");

let currentTime;
let currentDay = new Date();
let hours = currentDay.getHours();
let minutes = currentDay.getMinutes();
let seconds = currentDay.getSeconds();

if ( hours > 10 ) {
    if ( minutes > 10 ) {
        if ( seconds > 10) {
           currentTime = hours + ":" + minutes + ":" + seconds;
        } else 
            currentTime = hours + ":" + minutes + ":" + "0" + seconds;
        } else 
            currentTime = hours + ":" + "0" + minutes + ":" + "0" + seconds;
        } else {
            currentTime = "0" + hours + ":" + "0" + minutes + ":" + "0" + seconds; 
        }
    

console.log(currentTime);


console.log("");


console.log("Exercitiul Bonus");


const personObj1 = {
    name: 'Christa',
    age: 20
  };
  
  let person = personObj1;
  person.age = 25;

  console.log(person);
  console.log(personObj1);
  
  // Ce valori au 
  // personObj1 = { name: Christa, age: 25 } 
  // person = { name: Christa, age: 25  }
  
  person = {
    name: 'John',
    age: 50
  };
  
  const personObj2 = person;

  console.log(personObj1);
  console.log(personObj2);
  console.log(person);
  
  // Ce valori au 
  // personObj1 = { name: 'Christa', age: 25} 
  // personObj2 = { name: 'John', age: 50  } De ce nu afiseaza { name: 'Christa', age: 25} daca person = personObj1 ? E din cauza faptului ca person a fost definit ulterior ca si obiect cu cheie si valoare?
//   person = { name: 'John', age: 50 } De ce nu afiseaza  { name: 'Christa', age: 25} ? E din cauza faptului ca person a fost definit ulterior ca si obiect cu cheie si valoare?


