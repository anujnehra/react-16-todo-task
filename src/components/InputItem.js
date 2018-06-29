import React from 'react';

const InputItem = (props) => {
    return (
        <form onSubmit={props.addNewTaskHandler}>
            <input type="text"
                value= {props.handleCurrentValue}
                onChange= {props.onChangeHandler}
            />
            <button type="submit" >Submit</button>
        </form>
    );
};

export default InputItem;