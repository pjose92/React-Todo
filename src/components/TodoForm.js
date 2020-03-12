import React from "react";

const TodoForm = props => {
    return (
        <div>
            <form>
                <input type="text" placeholder="todo" onChange={props.onChangeHandler} onSubmit={props.submitHandler} value={props.value} />
                <button onClick={props.submitHandler}>Add Todo</button>
                <button onClick={props.clearHandler}>Clear When Completed</button>
            </form>
        </div>
    )
}

export default TodoForm