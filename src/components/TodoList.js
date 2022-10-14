import React from "react";
import Todo from './Todo';

export default function TodoList({todos,setTodos})
{
    const tasks = todos.map(ele => {
        return <Todo task = {ele.task} key = {ele.id} cur_todo = {ele} todos = {todos} setTodos = {setTodos} />
    });

    return (
        <div className = 'list-container'>
            <ul className = 'list-container_tasks'>
                {tasks}
            </ul>
        </div>
    )
}