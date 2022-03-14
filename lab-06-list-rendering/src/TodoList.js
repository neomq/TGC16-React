import React from 'react'

// Create a class-based component with the name 'TodoList'
export default class TodoList extends React.Component {
    state = {
        tasks: [
            "Wash the car",
            "Clean the room",
            "Do the laundry"
        ]
    }

    renderTodo () {
        let todos = [];

        for (let t of this.state.tasks) {
            let e = <li>{t}</li>;
            todos.push(e);
        }
        return todos;
    }

    render() {
        return (
            <div>
                {this.renderTodo()}
            </div>
        );
    }
}
