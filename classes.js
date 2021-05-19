// #### 1. Person Class
//     * Create a class called `Person` which accepts the name of a person as a string, and his / her age as a number.The`Person` class should have a method called describe which returns a string with the following syntax: "name, age years old".So, for example, if John is 19 years old, then the function describe of his object will return "John, 19 years old".


class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    anything() {
        return this.name + ", " + this.age + " years old." + "\"";
    }
}

const newData = new Person("\"" + " John", 19);
console.log(newData);
console.log(newData.anything());

console.log("===========================");

// const Person = class {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }

//     describe() {
//         return `${this.name}, ${this.age} years old`;
//     }
// }
// const person = new Person("John", 19);
// console.log(person.describe());

console.log("======================================================");


// #### 2. Tick Tock
// Rewrite the following code to use the "class" syntax. 
// ```javascript



class Clock {
    constructor({ template }) {
        this.template = template;

    }
    render() {
        const date = new Date();

        let hours = date.getHours();
        if (hours < 10) hours = '0' + hours;

        let mins = date.getMinutes();
        if (mins < 10) mins = '0' + mins;

        let secs = date.getSeconds();
        if (secs < 10) secs = '0' + secs;

        const output = this.template
            .replace('h', hours)
            .replace('m', mins)
            .replace('s', secs);

        console.log(output);
    }

    stop() { }

    start() {
        // setInterval(this.template, 1000);
        this.render();


    }

}
const clockConfig = { template: 'h,m,s' };
const myClock = new Clock(clockConfig);
myClock.start();


console.log("==================================================");


// #### 3. TV Class
// * Create a TV class with properties like brand, channel and volume.
// * Specify brand in a constructor parameter.Channel should be 1 by default.Volume should be 50 by default.
// * Add methods to increase and decrease volume.Volume can't never be below 0 or above 100.
//* Add a method to set the channel randomly.Let's say the TV has only 50 channels.
//* Add a method to reset TV so it goes back to channel 1 and volume 50.
// * It's useful to write a status, that returns info about the TV status like: "Panasonic at channel 8, volume 75".




class TV {
    constructor(brand) {
        this.brand = brand;
        this.channel = 1;
        this.volume = 50;

    }
    increaseVolume(n) {
        this.volume = this.volume + n;
        if (this.volume > 100) {
            this.volume = 100;
        }
    }
    decreaseVolume(n) {
        this.volume = this.volume - n;
        if (this.volume < 0) {
            this.volume = 0;
        }
    }

    setRandomCannel() {
        this.channel1 = Math.round(Math.random() * 50);
    }
    reset() {
        this.channel = 1;
        this.volume = 50;
    }
    getStatus() {
        return `${this.brand} at channel ${this.channel}, volume ${this.volume}`;
    }
}
const telly = new TV("Panasonic");
telly.setRandomCannel();
telly.increaseVolume(9999);
console.log(telly.getStatus());
telly.reset();
console.log(telly.getStatus);




console.log("=====================================================");
// ==========================================================


// * ** Note **: Volume of a cylinder: `V = πr^2h` - r is the radius and h is the height of the cylinder.

class Cylinder {
    constructor(radius, height) {
        this.radius = radius;
        this.height = height;
    }
    getVolume() {
        // `V = πr^2h`
        const volume = Math.PI * this.radius * this.radius * this.height
        return volume.toFixed(1)
    }
}


const test = new Cylinder(5, 20);
console.log(test.getVolume());

console.log("===========================================================");













