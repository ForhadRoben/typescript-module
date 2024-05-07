{
    //class
    class Animal {
        // name: string;
        // species: string;
        // sound: string;

        /* 
            public name:string;
            public species:string;
            public sound:string; */


        //parameter properties

        constructor(public name: string, public species: string, public sound: string) {
            // this.name = name;
            // this.species = species;
            // this.sound = sound;
        }
        //method
        makeSound() {
            console.log(`${this.name} says ${this.sound}`);
        }
    }
    const dog = new Animal('sheperd', 'dog', 'ghew') //dog instances
    const cat = new Animal('persian', 'cat', 'meaw')  //cat instances

    cat.makeSound()




}