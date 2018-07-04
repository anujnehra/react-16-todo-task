import React, {Component} from 'react';
import TodoItem from './TodoItem';
import InputItem from './InputItem';

class TodoList extends Component {

    constructor() {
        super();

        this.isCompletedClassToggle = this
            .isCompletedClassToggle
            .bind(this);
        this.updateCurrentValue = this
            .updateCurrentValue
            .bind(this);
        this.addNewTask = this
            .addNewTask
            .bind(this);
        this.deleteTask = this
            .deleteTask
            .bind(this);
        this.updateTaskHandler = this
            .updateTaskHandler
            .bind(this);
        this.makeEditable = this
            .makeEditable
            .bind(this);

        this.state = {
            tasks: [
                {
                    name: 'first Node',
                    completed: false,
                    is_editable: false
                }, {
                    name: 'second Node',
                    completed: false,
                    is_editable: false
                }, {
                    name: 'third Node',
                    completed: false,
                    is_editable: false
                }
            ],
            currentValue: ''
        };

    }

    isCompletedClassToggle(selectedNode) {
        let tasks = this.state.tasks;
        let task = tasks[selectedNode];
        task.completed = !task.completed;
        this.setState({tasks: tasks});
    }

    updateCurrentValue(newValue) {
        this.setState({currentValue: newValue.target.value});
    }

    addNewTask(event) {
        event.preventDefault();

        let tasks = this.state.tasks;
        tasks.push({name: this.state.currentValue, completed: false});

        this.setState({tasks: tasks, currentValue: ''});
    }

    deleteTask(index) {
        this.setState((prevState) => {
            delete prevState.tasks[index]
            return prevState
        });
    }

    updateTaskHandler(val, index) {
        this.setState((prevState) => {
            prevState.tasks[index].name = val
            prevState.tasks[index].is_editable = false
            return prevState
        });

    }

    makeEditable(index) {
        this.setState((prevState) => {
            prevState.tasks[index].is_editable = true
            return prevState
        });
    }

    render() {
        return (
            <section>
                <InputItem
                    onChangeHandler={this.updateCurrentValue}
                    handleCurrentValue={this.state.currentValue}
                    addNewTaskHandler={this.addNewTask}/>
                <ul>
                    {this
                        .state
                        .tasks
                        .map((obj, index) => {
                            return <TodoItem
                                details={obj}
                                key={index}
                                onClickHandler={this.isCompletedClassToggle}
                                selectedNode={index}
                                deleteTaskHandler={this.deleteTask}
                                updateTaskHandler={this.updateTaskHandler}
                                isEditable={obj.is_editable}
                                makeEditable={this.makeEditable}/>
                        })
}
                </ul>
            </section>
        );
    }
}

export default TodoList;