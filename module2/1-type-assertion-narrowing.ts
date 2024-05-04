{

    // type assertion/type narrowing

    // let course: any;
    // course = 'Next web development';
    // course = 123;
    // // (course as string).
    // // (course as number).

    let course: any;
    course = "Next level Web development";
    course = '222';
    // (course as number).
    // (course as string).split;

    // check leap year

    const checkLeapYear = (year: string | number) => {
        if (typeof year === 'string') {
            const convertToYr = parseFloat(year);
            const result = (convertToYr % 4 === 0 && convertToYr % 100 !== 0) || convertToYr % 400 === 0;
            return `The resulted year is leap year`
        }

    }

    checkLeapYear('1000') as string;



    // convert kg to gm

    const kgToGm = (value: string | number) => {
        if (typeof value === 'string') {
            const convertedValue = parseFloat(value) * 1000;
            return `The result is : ${convertedValue}`;
        }
        if (typeof value === 'number') {
            const convertedValue = value * 1000;
            return convertedValue;
        }

    };

    const result1 = kgToGm(1000) as number;
    console.log(result1);
    const result2 = kgToGm('1000') as string;

    // try catch

    type CustomError = {
        message: string;
    }
    try {

    }
    catch (error) {
        console.log((error as CustomError).message);
    }

    // try catch practice
    type errorMsg = {
        msg: string;
    }
    try {

    } catch (err) {
        console.log((err as errorMsg).msg);
    }









}