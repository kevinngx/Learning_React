"use strict";

console.log('App.js is running!');

// JSX - JavaScript XML

// only render the subtitle and p tag if subtitle exists - logical and operator
// render new p tag - if option.length > 0 "Here are your options" :No options"


var app = {
    appTitle: "Visibility Toggle",
    details: " This is the hidden details",
    showDetails: false
};

var toggleDetails = function toggleDetails() {
    app.showDetails = !app.showDetails;
    renderApp();
};

var appRoot = document.getElementById('app');

var renderApp = function renderApp() {
    var template = React.createElement(
        "div",
        null,
        React.createElement(
            "h1",
            null,
            app.appTitle
        ),
        React.createElement(
            "button",
            { onClick: toggleDetails },
            app.showDetails ? "Hide Details" : "Show Details"
        ),
        React.createElement(
            "p",
            null,
            app.showDetails ? app.details : undefined
        )
    );

    ReactDOM.render(template, appRoot);
};

renderApp();
