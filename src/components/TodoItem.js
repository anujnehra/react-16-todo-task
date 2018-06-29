import React, { Component } from 'react';

class TodoItem extends Component {
    constructor() {
        super();
        this.renderInputBox = this.renderInputBox.bind(this);
        this.renderLiBox = this.renderLiBox.bind(this);
        this.domRef = React.createRef()

    }

    renderInputBox() {
        return (
            <section>
                <input ref={this.domRef} name={this.props.selectedNode} type="text" defaultValue={this.props.details.name} />
                <button
                    onClick={() => { this.props.updateTaskHandler(this.domRef.current.value, this.props.selectedNode) }}
                >Update task
                </button>
            </section>
        );
    }

    renderLiBox() {
        return (
            <li className={(this.props.details.completed) ? 'completed' : ''}
                onClick={
                    () => {
                        this.props.onClickHandler(this.props.selectedNode)
                    }
                }
            >
                {this.props.details.name}

                <button onClick={(evt) => {
                    evt.stopPropagation();
                    this.props.deleteTaskHandler(this.props.selectedNode)
                }
                }>
                    Delete task</button>

                <button onClick={() => this.props.makeEditable(this.props.selectedNode)}>Edit task</button>
            </li>
        );
    }

    render() {
        return (
            (this.props.isEditable) ? this.renderInputBox() : this.renderLiBox()
        )
    }
};

export default TodoItem;