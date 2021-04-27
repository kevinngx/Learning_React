// arguments object - no longer bound with arrow functions

const add = (a, b) => {
    // console.log(arguments)
    return a + b
};

console.log(add(55,1, 1000))

// this keyword - no longer bound

const user = {
    name: 'Kevin',
    cities: ['Bankstown', 'Riverwood', 'Kirawee', 'Eastwood'],
    printPlacesLived(){
        const cityMessages = this.cities.map((city) => {
            return this.name + ' has lived in ' + city;
        });
        return cityMessages;
    }
};

console.log(user.printPlacesLived());

// Challenge - make an object that has data, create a method that accesses the data

const multiplier = {
    // Array of numbers
    numArray: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    multiplyBy: 6,
    multiplyNumbers() {
        return this.numArray.map((number) =>  this.multiplyBy * number);
    }
}

console.log(multiplier.multiplyNumbers())