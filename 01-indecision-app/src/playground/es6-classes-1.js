class Person {
    constructor(name='Anonymous', age=0) {
        this.name = name;
        this.age = age;
    }

    getGreeting() {
        return `Hi. I am ${this.name}!`;
    }

    getDescription() {
        return `Name: ${this.name}\nAge: ${this.age}`
    }
}

class Student extends Person {
    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }

    getDescription() {
        let description = super.getDescription();
        if (this.hasMajor()) {
            description += `\nMajor: ${this.major}`;
        }
        return description;
    }

    hasMajor() {
        return !!this.major;
    }

}

class Traveler extends Person {
    constructor(name, age, homeLocation) {
        super(name, age);
        this.homeLocation = homeLocation;
    }

    getGreeting() {
        let description = super.getGreeting();
        if (this.hasHomeLocation()) {
            description += ` I am visiting from ${this.homeLocation}`
        } 
        return description;
    }

    hasHomeLocation() {
        return !!this.homeLocation;
    }

}

// Main code body

const me = new Student("Kevin Nguyen", 23, "Finance");
console.log(me.getDescription())

const gf = new Student("Joyce Hsu", 24);
console.log(gf.getDescription())

const jp = new Traveler("Sasuke Uchiha", 16, "NIHOON!");
console.log(jp.getGreeting());