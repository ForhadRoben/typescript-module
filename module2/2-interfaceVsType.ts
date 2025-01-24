{
  // type alias and interface example

  // for object

  type User1 = {
    name: string;
    age: number;
  };

  interface User2 {
    name: string;
    age: number;
  }

  type RollNumber = number; //primitive type

  type UserRole1 = User1 & { role: string };
  // interface UserRole2 extends User2{
  //     role:string
  // }

  //type alias in interface
  interface UserRole2 extends User1 {
    role: string;
  }

  const user1: UserRole2 = {
    name: "forhad",
    age: 30,
    role: "manager",
  };

  // array

  type Roll1 = string[];
  interface Roll2 {
    [index: number]: number;
  }

  // const rollNumber1: Roll1 = [1, 2, 3]
  const rollNumber1: Roll2 = [1, 2, 3];

  // functions
  type Add1 = (num1: number, num2: number) => number;
  interface Add2 {
    (num1: number, num2: number): number;
  }
  const add: Add1 = (num1, num2) => {
    return num1 + num2;
  };
}
