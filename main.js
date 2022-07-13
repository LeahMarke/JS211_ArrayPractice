// 1: .length
const cars = ["ford", "mercedes", "jeep", "volvo"];
console.log(cars);
let carsLength = cars.length;
console.log(`The length of the cars array is ${carsLength}.`);

// 2: .concat()
const moreCars = ["BMW", "ford", "mitsubishi", "honda"];
const totalCars = cars.concat(moreCars);
console.log("this is totalCars:", totalCars);

// 3: .indexOf() and .lastIndexOf()
const honda = totalCars.indexOf("honda");
const ford = totalCars.lastIndexOf("ford");
console.log("index of honda:", honda);
console.log("last index of ford:", ford);

// 4: .join()
const stringOfCars = totalCars.join();
console.log(stringOfCars);

// 5: .split()
const carsFromString1 = stringOfCars.split(" ");
const carsFromString2 = stringOfCars.split(",");
console.log(carsFromString1, carsFromString2);

// 6: .reverse()
const carsInReverse = totalCars.reverse();
console.log(carsInReverse);

// 7: .sort()
const alphabetical = carsInReverse.sort();
console.log(carsInReverse.indexOf("BMW"));

// 8: .slice()
const pets = ["dog", "cat", "fish", "rabbit", "snake", "lizard", "bird"];
const reptiles = pets.slice(4, 6);
console.log(reptiles);

// 9: .splice()
const removedReptiles = pets.splice(4, 2, "hamster");
console.log(pets);

// 10: .pop()
const removedPet = pets.pop();
console.log(removedPet);

// 11: .push()
pets.push(removedPet);
console.log(pets);

// 12: .shift()
const shiftedElement = pets.shift();
console.log(shiftedElement, pets);

// 13: .unshift()
pets.unshift("turtle");
console.log(pets);

// 14: .forEach()
const numbers = [23, 45, 0, 2, 8, 44, 100, 1, 3, 91, 34];
const addTwo = (num, index, arr) => {
  let num = numbers[" "];
  return num + 2;
};
numbers.forEach(addTwo);
console.log(numbers);
console.log(addTwo);
