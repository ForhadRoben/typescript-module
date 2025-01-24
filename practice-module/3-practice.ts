{
  //never type
  //     never type in TypeScript represents values that never occur. It is often used for:

  // Functions that always throw an error and never return a value.
  // Functions with infinite loops that never terminate.
  // Ensuring exhaustive checks in TypeScript's type system, especially in switch statements.

  type Shape = "circle" | "square" | "triangle";

  const getArea = (shape: Shape): number => {
    switch (shape) {
      case "circle":
        return Math.PI * 10 * 10;
      case "square":
        return 10 * 10;
      case "triangle":
        return 0.5 * 10 * 10;
      default:
        const checkError: never = shape;
        throw new Error(`Unhandled shape: ${shape}`);
    }
  };
  console.log(getArea(12));
  //   console.log(getArea("circle"));
}
