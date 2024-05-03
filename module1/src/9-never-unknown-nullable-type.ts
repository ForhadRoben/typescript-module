{
    // nullable type

    const searchName = (value: string | null) => {
        if (value) {
            console.log('searching');
        } else {
            console.log('there is nothing to search');
        }
    }
    // searchName('forhad')
    searchName(null)

    // unknown typeof

    const speedInMeterPerSecond = (value: unknown) => {
        if (typeof value === 'number') {
            const convertedSpeed = (value * 1000) / 3600;
            console.log(`The speed is ${convertedSpeed} ms^-1`);
        }
        if (typeof value === 'string') {
            // const valueInNumber = value.split(' ');
            const [result, unit] = value.split(' ');
            const convertedSpeed = (parseFloat(result) * 1000) / 3600;
            console.log(convertedSpeed);
        }
        else
            console.log('wrong input');
    }
    speedInMeterPerSecond(null)
    // speedInMeterPerSecond('1000 km^-1')


    // never type

    const throwError = (msg: string): never => {
        throw new Error(msg);
    };
    throwError('warning');

}