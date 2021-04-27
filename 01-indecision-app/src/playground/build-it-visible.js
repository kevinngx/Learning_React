console.log('App.js is running!');

// JSX - JavaScript XML

// only render the subtitle and p tag if subtitle exists - logical and operator
// render new p tag - if option.length > 0 "Here are your options" :No options"


var app = {
    appTitle: "Visibility Toggle",
    details: " This is the hidden details",
    showDetails: false
}

const toggleDetails = () => {
    app.showDetails = !app.showDetails;
    renderApp();
}

const appRoot = document.getElementById('app');

const renderApp = () => {
    var template = (
        <div>
            <h1>{app.appTitle}</h1>
            <button onClick={toggleDetails}>{app.showDetails ? "Hide Details" : "Show Details"}</button>
            <p>{app.showDetails ? app.details : undefined}</p>
            
        </div>
    );
    
    ReactDOM.render(template, appRoot);
}

renderApp()



