{
  //ternary operator(?)|| optional chaining ||

  const age: number = 19;
  if (age >= 18) {
    console.log("adult");
  } else console.log("not adult");

  const isAdult = age >= 18 ? "adult" : "not adult";
  // console.log({ isAdult });

  //nullish coalescing operator (??)
  //   const isAuthenticated = false;
  const isAuthenticated = 0;
  // const isAuthenticated = null;
  // const isAuthenticated = undefined;
  const result1 = isAuthenticated ?? "guest";
  const result2 = isAuthenticated ? isAuthenticated : "guest";
  console.log({ result1 }, { result2 });

  // optional chaining(?.)

  type User = {
    name: string;
    address: {
      city: string;
      road: string;
      presentAddress?: string;
      permanent: string;
    };
  };
  const user: User = {
    name: "Frohad",
    address: {
      city: "ctg",
      road: "ctg road",
      permanent: "ctg town",
    },
  };
  const present = user?.address?.presentAddress ?? "no present";
  console.log({ present });
}
