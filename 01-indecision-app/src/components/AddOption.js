import React from 'react'

export default class AddOption extends React.Component {
    state = {
        error: undefined
    };

    handleAddOption = (e) => {
        e.preventDefault();
        const option = e.target.elements.option.value;
        const error = this.props.handleAddOption(option);
        console.log(error);

        e.target.elements.option.value = "";
        this.setState(() => ({ error }));
    };

    render() {
        return (
            <div>
            {this.state.error && <p>{this.state.error}</p>}
            <form onSubmit={this.handleAddOption}>
                <input type="text" name="option" />
                <button>Add option</button>
            </form>
            </div>
        );
    };
};