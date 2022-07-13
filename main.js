// `.length`
//  * Create an array called `cars` which consists of 4 different types of cars as String type. The first car type should be Ford.

const cars = ["ford", "mercedes", "jeep", "volvo"];
console.log(cars);
let carsLength = cars.length;
console.log(`The length of the cars array is ${carsLength}.`);

// `.concat()`
// * Create another array called `moreCars` with 4 more different types of cars. The last car type should be Honda.
// * Use the `concat` method to combine the `cars` and `moreCars` arrays into another array called `totalCars`.

const moreCars = ["BMW", "ford", "mitsubishi", "honda"];
const totalCars = cars.concat(moreCars);
console.log("this is totalCars:", totalCars);

// `.indexOf()` and `.lastIndexOf()`
//    * Use the `indexOf` method to console.log the index of `Honda` in `totalCars`.
//    * Use the `lastIndexOf` method to console.log the index of `Ford` in `totalCars`.

const honda = totalCars.indexOf("honda");
const ford = totalCars.lastIndexOf("ford");
console.log("index of honda:", honda);
console.log("last index of ford:", ford);

// `.join()`
//    * Use the `join` method to convert the array `totalCars` into a string called `stringOfCars`.

const stringOfCars = totalCars.join();
console.log(stringOfCars);

// `.split()`
//    * Use the `split` method to convert `stringOfCars` into an array called `carsFromString`.

const carsFromString1 = stringOfCars.split(" ");
const carsFromString2 = stringOfCars.split(",");
console.log(carsFromString1, carsFromString2);

// `.reverse()`
//    * Use the `reverse` method to create an array `carsInReverse` which is the array `totalCars` in reverse.

const carsInReverse = totalCars.reverse();
console.log(carsInReverse);

// sort
const alphabetical = carsInReverse.sort();
console.log(carsInReverse.indexOf("BMW"));

// slice
const pets = ["dog", "cat", "fish", "rabbit", "snake", "lizard", "bird"];
const reptiles = pets.slice(4, 6);
console.log(reptiles);

// splice
const removedReptiles = pets.splice(4, 2, "hamster");
console.log(pets);

// pop
const removedPet = pets.pop();
console.log(removedPet);
