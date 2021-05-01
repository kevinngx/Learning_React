class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this)
        this.handleDeleteOption = this.handleDeleteOption.bind(this)
        this.handlePick = this.handlePick.bind(this)
        this.handleAddOption = this.handleAddOption.bind(this)
        this.state = {
            options: props.options
        };
    }

    componentDidMount() {
        try {
            const json = localStorage.getItem('options')
            const options = JSON.parse(json)
            if (options.length > 0) { 
                this.setState(() => ({ options })) 
            }
        } catch (e) {
            // Do nothing at all
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.options.length !== this.state.options.length) {
            console.log('saving data');
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
        }
    }

    componentWillUnmount() {
        console.log('Component is unmounting...')
    }

    handlePick() {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        console.log(randomNum);
        const option = this.state.options[randomNum];
        alert(option);
    }

    handleDeleteOptions() {
        this.setState(() => ({ options: [] }));
    }

    handleDeleteOption(optionToRemove) {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) =>  optionToRemove !== option )
        }));
    }

    handleAddOption(option) {
        if (!option) {
            return 'Enter a valid value to add item';
        } else if (this.state.options.indexOf(option) > -1) {
            return 'This option already exists'
        } 

        this.setState((prevState) => ({ options: prevState.options.concat(option) }));

    }

    render() {
        const title = 'Indevision App'
        const subtitle = "Put your life in the hands of a computer"
        return(
            <div>
                <Header subtitle={subtitle}/>
                <Action 
                    hasOptions={this.state.options.length > 0}
                    handlePick={this.handlePick}
                />
                <Options 
                    options={this.state.options}
                    handleDeleteOption={this.handleDeleteOption}
                    handleDeleteOptions={this.handleDeleteOptions}
                />
                <AddOption
                    handleAddOption={this.handleAddOption}
                />

            </div>
        )
    }
}

IndecisionApp.defaultProps = {
    options: []
}


const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            {props.subtitle && <h2>{props.subtitle}</h2>}
        </div>
    )
}

Header.defaultProps = {
    title: 'Indecision App!'
}

class Action extends React.Component {
    
    render() {
        return (
            <div>
                <button 
                    onClick={this.props.handlePick}
                    disabled={!this.props.hasOptions}
                    >
                    What should I do?
                </button>
            </div>
        );
    }
}

const Options = (props) => {
        return (
            <div>
                <button onClick={props.handleDeleteOptions}>Remove All</button>
                {
                    props.options.map((option) => 
                        <Option 
                            key={option} 
                            optionText={option}
                            handleDeleteOption={props.handleDeleteOption}
                        />
                    )
                }
            </div>
        );
    }

const Option = (props) => {
    return (
        <div>
            {props.optionText}
            <button 
                onClick={(e) => {
                    props.handleDeleteOption(props.optionText);
                }}
            >
                Remove
            </button>
        </div>
    )
}

class AddOption extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            error: undefined
        }
    }

    handleAddOption(e) {
        e.preventDefault();

        const option = e.target.elements.option.value;
        const error = this.props.handleAddOption(option);
        console.log(error)

        e.target.elements.option.value = ""
        this.setState(() => ({ error }));

    }

    render() {
        return (
            <div>
            {this.state.error && <p>{this.state.error}</p>}
            <form onSubmit={this.handleAddOption}>
                <input type="text" name="option" />
                <button>Add option</button>
            </form>
            </div>
        )
    }
}

ReactDOM.render(<IndecisionApp/>, document.getElementById('app'))