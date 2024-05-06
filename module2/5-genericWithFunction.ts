{
    // generic with function

    const createArray = (param: string): string[] => {
        return [param]

    }
    const createArrayWithGeneric = <T>(param: T): T[] => {
        return [param]
    }
    const res1 = createArray('bnagladesh')
    const resGeneric = createArrayWithGeneric<string>('bangladesh');
    type User = {
        id: number;
        name: string;
    }
    const resGenericObject = createArrayWithGeneric<User>({
        id: 123,
        name: 'forhad'
    })

    const createArrayWithTuple = <T, Q>(param1: T, param2: Q): [T, Q] => {
        return [param1, param2]
    };
    const resTuple = createArrayWithTuple<string, number>('bangla', 222)

    type Tupletype = {
        name: string;
        id: number;
        isAdmin: boolean
    }
    const resTuple1 = createArrayWithTuple<number, Tupletype>(222, {
        name: 'abc',
        id: 5,
        isAdmin: true
    })

    const addCourseToStudent = <T>(student: T) => {
        const course = 'next level web';  //fixed course for all student
        return {
            ...student, course
        }
    }
    const student1 = addCourseToStudent({
        name: 'mr.X',
        email: 'x@gmail.com',
        devType: 'nlwd'
    });
    const student2 = addCourseToStudent({
        name: 'mr.y',
        email: 'y@gmail.com',
        watch: 'apple watch',
    })




}