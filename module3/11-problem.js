// function repeatString(param1: string, param2: number) {
//     let newString = '';
//     for (let i = 0; i < param2; i++) {
//         newString = newString + param1;
//     }
//     return newString;
// }
// console.log(repeatString("hello!", 3));   //Output: "hello!hello!hello!"
function reverseArray(arr) {
    var newArr = [];
    for (var i = arr.length - 1; i >= 0; i--) {
        newArr.push(arr[i]);
    }
    return newArr;
}
console.log(reverseArray([10, 20, 30])); // [30, 20, 10]
console.log(reverseArray(["apple", "banana", "cherry"])); // ["cherry", "banana", "apple"]
