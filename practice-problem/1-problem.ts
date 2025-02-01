// 1. Create a function that takes an array of numbers as input and returns the sum of all the numbers in the array. Make sure to define the types for the input parameter and return value.

const numberOfArray = (numbers: number[]): number => {
  let sum = 0;
  for (let num of numbers) {
    sum = sum + num;
  }
  return sum;
};
const numbersArray = [10, 20, 40];
// console.log(numberOfArray(numbersArray));

// 2. Define an interface called Person that has the following properties: name (string), age (number), and email (string). Create an object based on this interface and print out its properties.

interface IPerson {
  name: string;
  age: number;
  email: string;
}
const newObj: IPerson = {
  name: "Forhad",
  age: 32,
  email: "rforhadewu@gmail.com",
};
// console.log(newObj);
// console.log(newObj.name);

//3. Write a function called calculateArea that takes the length and width of a rectangle as parameters and returns its area. Define the types for the input parameters and return value.

const calculateArea = (length: number, width: number): number => {
  const area = length * width;
  return area;
};
// console.log(calculateArea(12, 5));

// 4. Implement a generic function called reverseArray that takes an array of any type and returns the reversed version of the array. Test it with different types of arrays (e.g., numbers, strings) to ensure it works correctly.
const reverseArray = <T>(param: T[]): T[] => {
  // return param.slice().reverse();
  let reversed: T[] = [];
  for (const element of param) {
    reversed.unshift(element);
  }
  return reversed;
};
const numArr = [10, 20, 30];
console.log(reverseArray(numArr));
console.log(numArr);

const strArr = reverseArray<string>(["apple", "banana", "cherry"]);
console.log(strArr);

type TUser = {
  id: number;
  name: string;
};

const obj = reverseArray<TUser>([
  { id: 5, name: "forhad" },
  { id: 51, name: "forhad1" },
  { id: 52, name: "forhad2" },
]);
console.log(obj);
