{
    // generic interface

    interface Developer<T, X = null> {
        name: string;
        computer: {
            brand: string;
            model: string;
            release: number;

        };
        smartwatch: T;
        bike?: X;
    }

    type ReplicaWatch = {
        model: string;
        display: string;
    }

    const poorDevs: Developer<ReplicaWatch> = {
        name: 'forhad',
        computer: {
            brand: 'asus',
            model: 'as25',
            release: 2012,
        },
        smartwatch: {
            model: 'replica',
            display: 'oled',
        }
    }

    interface AppWatch {
        model: string;
        display: string;
        healthCheck: boolean;
    }
    interface Bike {
        model: string;
        year: string;
    }

    const richDevs: Developer<AppWatch, Bike> = {
        name: 'Roben',
        computer: {
            brand: 'apple',
            model: 'ap14',
            release: 2023
        },
        smartwatch: {
            model: 'app25',
            display: 'super',
            healthCheck: true
        },
        bike: {
            model: 'yamaha',
            year: '2015'
        }

    }



}