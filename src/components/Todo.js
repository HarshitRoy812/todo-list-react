import React from "react";

export default function Todo({task,cur_todo,todos,setTodos})
{

    const removeTodo = () => {
        var ele = document.getElementById(cur_todo.id);
        ele.classList.add('popdown');
        setTimeout(() => {
            setTodos(todos.filter(ele => cur_todo.id !== ele.id));
        },500);
        
    }

    const completeTodo = () => {
        setTodos(todos.map(ele => {
            if (cur_todo.id === ele.id)
            {
                return {...ele,completed : !ele.completed}
            }
            return ele;
        }))
    }


    return (
        <div className = 'todo' id = {cur_todo.id}>
            <h1 className = {cur_todo.completed === true ? 'completed' : ''}> {task} </h1>
            <div className = 'todo_actions'>
                <button onClick = {completeTodo} className = {cur_todo.completed === true ? 'btn_complete red_bg' : 'btn_complete'}> <i className = {cur_todo.completed === true ? 'fas fa-xmark' : 'fas fa-check'}> </i></button>
                <button onClick = {removeTodo} className = 'btn_remove'> <i className = 'fas fa-trash'> </i></button>   
            </div>
        </div>
    )
}