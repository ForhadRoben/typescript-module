//string
let firstName: string = 'bangladesh';
// boolean
let isBoolean: boolean = true;
let roll: number = 123;
let x: undefined = undefined;
let y: null = null;

// array
let friends: string[] = ['jame', 'june']
let numbers: number[] = [12, 13]

// tuple
let coordinates: [number, number] = [1, 5];
let biodata: [number, string, boolean] = [12, 'ayush', true]

//reference type (object)
const user: {
    readonly company: string;
    // company: 'Phero'; //literal types
    firstName: string;
    middleName?: string; //optional type
    lastName: string;
} = {
    company: 'Phero',
    firstName: 'forhad',
    // middleName:'islam',
    lastName: 'roben'
}
// user.company='ph'
