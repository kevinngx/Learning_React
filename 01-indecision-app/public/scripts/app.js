'use strict';

// arguments object - no longer bound with arrow functions

var add = function add(a, b) {
    // console.log(arguments)
    return a + b;
};

console.log(add(55, 1, 1000));

// this keyword - no longer bound

var user = {
    name: 'Kevin',
    cities: ['Bankstown', 'Riverwood', 'Kirawee', 'Eastwood'],
    printPlacesLived: function printPlacesLived() {
        var _this = this;

        var cityMessages = this.cities.map(function (city) {
            return _this.name + ' has lived in ' + city;
        });
        return cityMessages;
    }
};

console.log(user.printPlacesLived());

// Challenge - make an object that has data, create a method that accesses the data

var multiplier = {
    // Array of numbers
    numArray: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    multiplyBy: 6,
    multiplyNumbers: function multiplyNumbers() {
        var _this2 = this;

        return this.numArray.map(function (number) {
            return _this2.multiplyBy * number;
        });
    }
};

console.log(multiplier.multiplyNumbers());
