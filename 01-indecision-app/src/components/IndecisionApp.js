import React from 'react'
import AddOption from './AddOption'
import Options from './Options'
import Header from './Header'
import Action from './Action'
import OptionModal from './OptionModal'
import {Helmet} from "react-helmet"

export default class IndecisionApp extends React.Component {
    state = {
        options: [],
        selectedOption: undefined
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

    handleClearSelectedOption = () => {
        this.setState(() => ({selectedOption: undefined}))
    }

    handlePick = () => {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        console.log(randomNum);
        const option = this.state.options[randomNum];
        this.setState(() => ({selectedOption: option}))
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
                <Helmet>
                    <title>Nested Title</title>
                    <script type="text/javascript" src='http://nexus.ensighten.com/ens-training18/kev-test/Bootstrap.js'></script>
                </Helmet>
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
                <OptionModal
                    selectedOption={this.state.selectedOption}
                    handleClearSelectedOption={this.handleClearSelectedOption}
                />
            </div>
        );
    };
};

IndecisionApp.defaultProps = {
    options: []
};