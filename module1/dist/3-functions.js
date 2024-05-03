"use strict";
{
    // normal function
    function add(num1, num2 = 10) {
        return num1 + num2;
    }
    add(2, 3);
    // arrow function
    const addArrow = (num1, num2) => num1 + num2;
    // object--> fuction-->method
    const poorUser = {
        name: 'Forhad',
        balance: 0,
        // normal anonymous function 
        addBalance(balance) {
            return `My balance is ${this.balance + balance}`;
        }
    };
    //  callback function using map
    const total = [5, 6, 7];
    const newTotal = total.map((elem) => elem * elem);
}
