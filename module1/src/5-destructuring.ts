{
  //object destructuring

  const user = {
    id: 123,
    name: {
      firstName: "Forhad",
      middleName: "Islam",
      lastName: "Roben",
    },
    contactNo: "01676766",
    address: "chandpur",
  };
  const {
    contactNo: phoneNumber, //name alias ek name k onno name e daka // alias for `contactNo`
    name: { middleName: midName }, // extracting `middleName` and aliasing as `midName`
  } = user;

  console.log(phoneNumber, midName);

  // array destructuring

  const friends: string[] = ["forhad", "wasif", "wazil", "nabila", "sayem"];
  const [, , bestFriends, ...rest] = friends;

  console.log(bestFriends, rest);
}
