import React from "react";
import {nanoid} from 'nanoid';

export default function Todo({text,setText,todos,setTodos})
{
    const inputHandler = (e) => {
        setText(e.target.value);
    }

    const formHandler = (e) => {
        e.preventDefault();

        if (!text)
        {
            alert('Please provide a task');
        }
        else if (todos.length === 7)
        {
            alert('You can have maximum upto 7 todos');
        }
        else 
        {
            setTodos([...todos,{id : nanoid(),task : text,completed : false}]);
            setText('');
        }
        
        
        
    }

    return (
        <form>
            <div className = 'todo-form'>
                <h1 className = 'todo-form_header'> TODO LIST </h1>

                <div className = 'todo-form_inputs'>
                    <input type = 'text' value = {text} onChange = {inputHandler} placeholder = 'Enter your task' />
                    <button onClick = {formHandler}> Add </button>
                </div>

            </div>
        </form>
    )
}