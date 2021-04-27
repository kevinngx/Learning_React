console.log('App.js is running!');

// JSX - JavaScript XML

// only render the subtitle and p tag if subtitle exists - logical and operator
// render new p tag - if option.length > 0 "Here are your options" :No options"


var app = {
    appTitle: "IndecisionApp",
    subtitle: "Put your life in the hands of a computer",
    options: ['one', 'two']
}

var template = (
    <div>
        <h1>{app.appTitle}</h1>
        {app.subtitle && <p>{app.subtitle}</p>}
        <p>{app.options.length > 0 ? "Here are your options" : "No options"}</p>
        <ol>
            <li>Item one</li>
            <li>Item two</li>
        </ol>
    </div>
);


let count = 0;

const addOne = () => {
    count++;
    renderCounterApp()
};

const minusOne = () => {
    count--;
    renderCounterApp()
};

const reset = () => {
    count = 0
    renderCounterApp()
};

const appRoot = document.getElementById('app');

const renderCounterApp = () => {
    const templateTwo = (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={addOne}>+1</button>
            <button onClick={minusOne}>-1</button>
            <button onClick={reset}>Reset</button>
        </div>
    );

    ReactDOM.render(templateTwo, appRoot);
}

renderCounterApp()