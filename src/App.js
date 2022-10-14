import React, {useState} from 'react';
import Form from './components/Form';
import TodoList from './components/TodoList';
import './sass/index.scss';

export default function App()
{
  const [textInput,setTextInput] = useState('');
  const [todos,setTodos] = useState([]);

  return (
    <React.Fragment>
      <Form text = {textInput} setText = {setTextInput} todos = {todos} setTodos = {setTodos} />
      <TodoList todos = {todos} setTodos = {setTodos} />
    </React.Fragment>
  )
}