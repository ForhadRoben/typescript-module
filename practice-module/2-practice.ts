{
  //forEach(): returns undefined,use it when function executes specific operation
  // map(): returns new array,
  const num1: number[] = [1, 2, 3, 4];
  const result1 = num1.forEach((elem: number) => {
    console.log(elem);
  });
  console.log(result1);

  //map
  const num: number[] = [1, 2, 3, 4];
  const result = num.map((elem) => {
    console.log(elem);
    return elem;
  });
  console.log(result);
}
