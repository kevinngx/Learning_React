import React from 'react'
import AddOption from './AddOption'
import Options from './Options'
import Header from './Header'
import Action from './Action'


export default class IndecisionApp extends React.Component {
    state = {
        options: []
    };

    componentDidMount() {
        try {
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);
            if (options.length > 0) { 
                this.setState(() => ({ options })); 
            }
        } catch (e) {
            // Do nothing at all
        };
    };

    componentDidUpdate(prevProps, prevState) {
        if (prevState.options.length !== this.state.options.length) {
            console.log('saving data');
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
        };
    };

    componentWillUnmount() {
        console.log('Component is unmounting...')
    };

    handlePick = () => {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        console.log(randomNum);
        const option = this.state.options[randomNum];
        alert(option);
    };

    handleDeleteOptions = () => {
        this.setState(() => ({ options: [] }));
    };

    handleDeleteOption = (optionToRemove) => {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) =>  optionToRemove !== option )
        }));
    };

    handleAddOption = (option) => {
        if (!option) {
            return 'Enter a valid value to add item';
        } else if (this.state.options.indexOf(option) > -1) {
            return 'This option already exists';
        }; 

        this.setState((prevState) => ({ options: prevState.options.concat(option) }));
    };

    render() {
        const title = 'Indevision App';
        const subtitle = "Put your life in the hands of a computer";
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
        );
    };
};

IndecisionApp.defaultProps = {
    options: []
};