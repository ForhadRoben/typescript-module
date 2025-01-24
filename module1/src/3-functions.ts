{
  // normal function
  function add(num1: number, num2: number = 10): number {
    return num1 + num2;
  }
  // const result = add(2, 3);
  // const result = add(2);
  // console.log(result);

  // arrow function

  const addArrow = (num1: number, num2: number): number => num1 + num2;

  // object--> fuction-->method

  const poorUser = {
    name: "Forhad",
    balance: 0,
    // normal anonymous function
    addBalance(balance: number): string {
      return `My balance is ${this.balance + balance}`;
    },
  };

  //  callback function using map
  const total: number[] = [5, 6, 7];
  const newTotal: number[] = total.map((elem: number): number => elem * elem);
}
