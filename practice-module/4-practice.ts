{
  //types alias:Use type for union, intersection, or primitive types
  //interface:Use interface when you anticipate extending the object type
  // for object

  type User1 = {
    name: string;
    age: number;
  };

  interface User2 {
    name: string;
    age: number;
  }

  //extends

  //   type newUser=User1 &{role:string}
  interface newUser extends User1 {
    role: string;
  }

  const user1: newUser = {
    name: "forhad",
    age: 30,
    role: "super",
  };

  //array

  //   [index: number] for arrays with numeric indices.
  // [index: string] for objects with string keys.
  type Num = number[];
  interface Num1 {
    [index: string]: string;
  }

  //   const num:Num=[1,2,3]
  const num: Num1 = { "0": "1", "1": "2", "2": "3" };
  console.log(num);
}
