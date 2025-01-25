{
  /**
   * constraints with generic function
   */
  const addCourseToStudent = <
    T extends { id: number; name: string; email?: string }
  >(
    student: T
  ) => {
    const course = "level-2";
    return { ...student, course };
  };

  //   const student1: { id: number; name: string } = {
  //     id: 12,
  //     name: "forhad",
  //   };
  const student1 = addCourseToStudent<{ id: number; name: string }>({
    id: 13,
    name: "forhad",
  });

  //   console.log(student1);

  //keyof

  type Person = {
    bike: string;
    car: string;
    ship: string;
  };
  //   type Owner = "bike" | "car" | "ship";
  type Owner2 = keyof Person;
  const owner: Owner2 = "bike";
  console.log(owner);

  const getPropertyValue = <X, Y extends keyof X>(obj: X, key: Y) => {
    return obj[key];
  };
  const user = {
    name: "forhad",
    age: 32,
  };
  console.log(getPropertyValue(user, "age"));
  //   keyof user results in "name" | "age" , so only these keys can be passed.

  ////////
}
