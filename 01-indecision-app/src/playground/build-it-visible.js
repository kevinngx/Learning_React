console.log('App.js is running!');

// Using Components and Component State

class Visibility extends React.Component {
    constructor(props) {
        super(props);
        this.toggleDetails = this.toggleDetails.bind(this);
        this.state = {
            showDetails: false
        };
    }

    toggleDetails() {
        console.log("Details Toggled")
        this.setState((prevState) => {
            return {
                showDetails: !prevState.showDetails
            }
        });
    }

    render() {
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.toggleDetails}>
                    {this.state.showDetails ? "Hide Details" : "Show Details"}
                </button>
                {this.state.showDetails && (
                    <div>
                        <p> Hey. These are some details</p>
                    </div>
                )}
            </div>
        )
    }

}

ReactDOM.render(<Visibility />, document.getElementById('app'))

// // JSX - JavaScript XML

// // only render the subtitle and p tag if subtitle exists - logical and operator
// // render new p tag - if option.length > 0 "Here are your options" :No options"


// var app = {
//     appTitle: "Visibility Toggle",
//     details: " This is the hidden details",
//     showDetails: false
// }

// const toggleDetails = () => {
//     app.showDetails = !app.showDetails;
//     renderApp();
// }

// const appRoot = document.getElementById('app');

// const renderApp = () => {
//     var template = (
//         <div>
//             <h1>{app.appTitle}</h1>
//             <button onClick={toggleDetails}>{app.showDetails ? "Hide Details" : "Show Details"}</button>
//             <p>{app.showDetails ? app.details : undefined}</p>
            
//         </div>
//     );
    
//     ReactDOM.render(template, appRoot);
// }

// renderApp()



