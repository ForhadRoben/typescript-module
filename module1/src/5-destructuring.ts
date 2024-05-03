{
    //object destructuring

    const user = {
        id: 123,
        name: {
            firstName: "Forhad",
            middleName: "Islam",
            lastName: "Roben"
        },
        contactNo: "01676766",
        address: "chandpur",

    };
    const {
        contactNo: phoneNumber, //name alias ek name k onno name e daka
        name: { middleName: midName }
    } = user

    // array destructuring

    const friends: string[] = ["forhad", "wasif", "wazil", "nabila", "sayem"]
    const [, , bestFriends, ...rest] = friends
}