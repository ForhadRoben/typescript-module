{
  //
  //method
  const poorUser = {
    name: "Forhad",
    balance: 0,
    // normal anonymous function
    // addBalance(balance: number): string {
    //   return `My balance is ${this.balance + balance}`;
    // },
    //arrow
    addBalance: (balance: number): string => {
      return `My balance is ${balance + balance}`;
    },
  };
  console.log(poorUser.addBalance(100));

  // spread operator
  //array
  //   Spread Operator: Creates new array, original arrays unchanged.
  // concat Method:creates a new array and leaves the originals intact.
  // push Method: Modifies the original array and only returns the new length of the array.

  const stu1: string[] = ["amin", "tamim", "sakib"];
  const stu2: string[] = ["amin1", "tamim1", "sakib1"];
  //   const newStu: string[] = [...stu1, ...stu2];
  //   const newStu: string[] = stu1.concat(stu2);
  //   console.log(newStu);

  stu1.push(...stu2); //length
  console.log(stu1); // change original array

  //   object
  const obj1 = {
    name: "forhad",
    skills: "mern",
  };
  const obj2 = {
    name: "Islam",
    skills: "mean",
  };
  const newObj = { ...obj1, ...obj2 };

  //

  //rest operator:
  const greetFriends = (...friends: string[]) => {
    // console.log(`hi ${friend1} ${friend2} ${friend3}`);
    friends.forEach((friend) => {
      console.log(`hi ${friend}`);
    });
  };
  greetFriends("forhad", "islam", "robin", "ozil");
}
