{
    // type alias
    //object

    type User = {
        name: string;
        address: string;
        contact?: string;
        age: number;
        gender: string;
    }

    const user1: User = {
        name: "forhad",
        address: "chandpur",
        contact: "01600000",
        age: 50,
        gender: "male",
    };

    const user2: User = {
        name: "nabila",
        address: "chandpr",
        age: 51,
        gender: "female",
    }

    //string
    type UserName = string;
    const userName: UserName = 'forhad';

    // boolean
    type IsAdmin = boolean;
    const isAdmin: IsAdmin = true;

    //function


    type Add = (num1: number, num2: number) => number;
    const add: Add = (num1, num2) => num1 + num2;

}