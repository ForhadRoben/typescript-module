
// function repeatString(param1: string, param2: number) {
//     let newString = '';
//     for (let i = 0; i < param2; i++) {
//         newString = newString + param1;
//     }
//     return newString;
// }
// console.log(repeatString("hello!", 3));   //Output: "hello!hello!hello!"

// function reverseArray<T>(arr: T[]): T[] {
//     const newArr: T[] = [];
//     for (let i = arr.length - 1; i >= 0; i--) {
//         newArr.push(arr[i]);
//     }
//     return newArr;
// }

// console.log(reverseArray([10, 20, 30])); // [30, 20, 10]
// console.log(reverseArray(["apple", "banana", "cherry"])); // ["cherry", "banana", "apple"]

// asynchronous promise
// interface IData {
//     name: string;
//     age: number;
//     address: string;
// };

// const data: IData = {
//     name: "Fahim",
//     age: 45,
//     address: "Khulna, Bangladesh"
// };
// const showMessage = (): Promise<IData> => {
//     return new Promise((resolve, reject) => {
//         if (data) {
//             resolve(data);
//         }
//         reject("No data found!")
//     })
// }

// showMessage()
//     .then((result) => {
//         console.log(result); // { name: 'Fahim', age: 45, address: 'Khulna, Bangladesh' }
//     })
//     .catch((error) => {
//         console.error(error); // no data found!
//     });


// asynchronous async/await
interface IPost {
    userId: number;
    id: number;
    title: string;
    body: string;
}

const fetchData = async (): Promise<IPost[]> => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    const data = await res.json();
    // console.log(data);
    return data;
};

// const result1 = fetchData();
// console.log(result1)

const showData = async () => {
    const result1 = await fetchData();
    console.log(result1)

}

showData()
