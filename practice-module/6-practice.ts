{
  /**
   * generic function
   */
  // normal
  const createArray = (param: string): string[] => {
    return [param];
  };
  const res1 = createArray("Bangladesh");
  //   console.log(res1);

  // generic
  const createArrayWithGeneric = <T>(param: T): T[] => {
    return [param];
  };
  const resGeneric = createArrayWithGeneric<string>("bangladesh");
  //   console.log(resGeneric);

  interface User {
    name: string;
    age: number;
  }

  const genericObj = createArrayWithGeneric<User>({
    name: "forhad",
    age: 30,
  });
  console.log(genericObj);

  const addCourseToStudent = <T>(student: T) => {
    const course = "next level web"; //fixed course for all student
    return {
      ...student,
      course,
    };
  };
  const student1 = addCourseToStudent({
    name: "mr.X",
    email: "x@gmail.com",
    devType: "nlwd",
  });
  const student2 = addCourseToStudent({
    name: "mr.y",
    email: "y@gmail.com",
    watch: "apple watch",
  });
  console.log(addCourseToStudent(student2));
  /////////
  ////////
}
