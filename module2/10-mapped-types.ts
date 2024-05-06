{
    // mapped types

    const arrOfNumbers: number[] = [1, 4, 5];

    // const arrOfStrings : string[] = ['1','4','5']
    const arrOfStrings: string[] = arrOfNumbers.map((number) =>
        number.toString()
    );
    console.log(arrOfStrings);

    type AreaNumber = {
        height: number;
        width: number;
    }
    //   obj['name'] // obj theke kono property nia asar jonno
    type Height = AreaNumber['height'] //look up type
    //   type AreaString={
    //     height:string;
    //     width:string;
    //   }

    // keyof AreaNumber => "height"|"width"

    // T => {height:string;width:number}
    // key => T["width"]  //look up type
    type AreaString<T> = {
        // [key in 'height' | 'width']:string;
        // [key in keyof AreaNumber]:string;
        [key in keyof T]: T[key];
    }

    const area1: AreaString<{ height: string; width: number }> = {
        height: "100",
        width: 50,
    };



}