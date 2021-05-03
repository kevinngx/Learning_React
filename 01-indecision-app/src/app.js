import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp'

ReactDOM.render(<IndecisionApp/>, document.getElementById('app'))

class OldSyntax {
    constructor() {
        this.name = 'Kevin'
    };
    getGreeting() {
        return `Hi. My name is ${this.name}.`;
    };
};