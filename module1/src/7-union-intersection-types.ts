{

    // union type

    type FrontendDeveloper = 'fakibaaz' | 'junior developer'; // value hisebe type use krle string literal type
    type FullstackDeveloper = 'frontend' | 'Expert developer';

    type Developer = FrontendDeveloper | FullstackDeveloper;
    const newDeveloper: Developer = 'frontend';

    type User = {
        name: string;
        email?: string;
        gender: 'male' | 'female';
        bloodGroup: 'o+' | 'a+' | "ab+";
    }
    const user1: User = {
        name: "forhad",
        gender: 'male',
        bloodGroup: 'o+'
    }

    // intersection types

    type Frontend = {
        skills: string[];
        designation1: 'FD';

    }
    type Backend = {
        skills: string[];
        designation2: 'BD';
    }

    type Fullstack = Frontend & Backend;
    const fullstack: Fullstack = {
        skills: ['html', 'css', 'js'],
        designation1: 'FD',
        designation2: "BD"

    }


}