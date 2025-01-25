{
  /**
   * generic type alias: explicitly type define na kore variable hisebe receive
   * generic interface:
   
   *
   */
  // array
  type GenericType<T> = Array<T>;
  // const number:number[]=[1,2,3]
  //   const number: Array<number> = [1, 2, 3];
  const number: GenericType<number> = [1, 2, 3];
  const str: GenericType<string> = ["tamin", "sakib", "mushi"];
  const bool: GenericType<boolean> = [true, false, true];

  interface User1 {
    name: string;
    age: number;
    type: boolean;
  }
  const object1: GenericType<User1> = [
    { name: "forhad", age: 30, type: true },
    { name: "islam", age: 32, type: false },
  ];

  //   tuple

  type GenericTuple<X, Y> = [X, Y];
  // const arrayTuple:[string,string]=['forhad','islam']
  const arrayTuple: GenericTuple<string, User1> = [
    "forhad",
    { name: "forhd", age: 30, type: true },
  ];

  //object
  interface GenericInterface<T, X = null> {
    name: string;
    computer: {
      model: string;
      price: number;
    };
    watch: T;
    bike?: X;
  }

  interface ReplicaWatch {
    name: string;
    price: number;
  }
  interface Bike {
    model: string;
    brand: string;
  }
  interface AppWatch {
    name: string;
    price: string;
  }
  const person1: GenericInterface<ReplicaWatch> = {
    name: "forhad",
    computer: {
      model: "hp",
      price: 50000,
    },
    watch: {
      name: "replice",
      price: 2000,
    },
  };

  const person2: GenericInterface<AppWatch, Bike> = {
    name: "forhad islam",
    computer: {
      model: "hpultra",
      price: 500000,
    },
    watch: {
      name: "replice",
      price: "200000",
    },
    bike: {
      model: "fz",
      brand: "yahamaha",
    },
  };

  ///////////////
  ///////////////
}
