console.log('App.js is running!');

// JSX - JavaScript XML

// only render the subtitle and p tag if subtitle exists - logical and operator
// render new p tag - if option.length > 0 "Here are your options" :No options"


var app = {
    appTitle: "IndecisionApp",
    subtitle: "Put your life in the hands of a computer",
    options: []
}

const onFormSubmit = (e) => {
    e.preventDefault();

    const option = e.target.elements.option.value;

    if (option) {
        app.options.push(option);
        e.target.elements.option.value = ""
        renderApp()
    }
};

const removeAll = () => {
    app.options = [];
    renderApp()
}


const makeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    console.log(randomNum);
    const option = app.options[randomNum];
    alert(option);
}

const appRoot = document.getElementById('app');

const renderApp = () => {
    var template = (
        <div>
            <h1>{app.appTitle}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length > 0 ? "Here are your options" : "No options"}</p>
            <p>Number of options: {app.options.length}</p>
            
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option" />
                <button>Add option</button>
            </form>

            <ol>
                {
                    app.options.map((option) => <li key={option}> {option}</li>)
                }
            </ol>
                
            <button disabled={app.options.length===0} onClick={makeDecision}>Make Decision</button>
            <button onClick={removeAll}>Remove All</button>
            
        </div>
    );
    
    ReactDOM.render(template, appRoot);
}

renderApp()



