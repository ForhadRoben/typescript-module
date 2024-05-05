{
    // generic type array
    type GenericType<T> = Array<T>
    // type GenericType<param> = Array<param>
    // const rollNumber:number[]=[1,2,3];
    // const rollNumber: Array<number> = [1, 2, 3];
    const rollNumber: GenericType<number> = [1, 2, 3];
    const mentors: GenericType<string> = ['x', 'y', 'z'];
    const boolValue: GenericType<boolean> = [true, false, true];

    const add = (num1: number, num2: number): number => {
        return num1 + num2
    }
    add(30, 20)

    // generic type array of object

    type User1 = {
        name: string;
        age: number;
    }
    interface User2 {
        name: string;
        age: number
    }

    // const user:GenericType<object>=[
    // const user:GenericType<{name:string,age:number}>=[
    const user: GenericType<User2> = [
        {
            name: 'f',
            age: 10
        },
        {
            name: 'o',
            age: 12
        }
    ]

    // generic tuple

    type GenericTuple<X, Y> = [X, Y]

    // const manush:[string,string]=['x', 'y']
    const manush: GenericTuple<string, string> = ['x', 'y']

    const userId: GenericTuple<number, { name: string, age: number }> = [123, { name: 'fro', age: 12 }]




}