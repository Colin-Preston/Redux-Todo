import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';


class TodoForm extends Component {

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         newTodo: ''
    //     };
    //     this.addTodo = this.addTodo.bind(this);
    //     this.updateNewTodo = this.updateNewTodo.bind(this);
    // }
    state = {
            newTodo: ''
        };

    addTodo=(event)=>{
        event.preventDefault();
        this.props.addTodo({
            value: this.state.newTodo,
            complete: false
        });
        this.setState({
            newTodo: ''
        });
    }

    updateNewTodo=(event) => {
        this.setState({
            newTodo: event.target.value
        });
    }

    render() {
        return (
            <div className="TodoForm">
                <form onSubmit={this.addTodo}>
                    <input
                        onChange={this.updateNewTodo}
                        placeholder="enter new todo here"
                        value={this.state.newTodo}
                    />
                </form>
            </div>
        );
    }
}

export default connect(null, { addTodo })(TodoForm);