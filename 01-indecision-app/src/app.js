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

var user = {
    name: 'Joyce',
    age: 24,
    location: 'Kirrawee'
}

function getLocation(location) {
    if (location) {
        return <p>Location: {location}</p>
    } else {
        return undefined
    }
}

var templateTwo = (
    <div>
        <h1>{user.name ? user.name : 'Anonymous'}</h1>
        {(user.age && user.age >= 18) && <p>User Age: {user.age}</p>}
        {getLocation(user.location)}
    </div>
)

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);

