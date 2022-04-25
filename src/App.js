import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Item } from './components/Item';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addToTodo } from './actions/todoAction';


function App() {
  const todoList = useSelector(state => state.todo);
  const dispatch = useDispatch();
  const [newTodo, setNewTodo] = useState('');

  function handleChange(e) {
    setNewTodo(e.target.value);
    // console.log(newTodo);
  }

  function handleClick(e) {
    e.preventDefault();
    dispatch(addToTodo({
      id: Math.ceil(Math.random() * 100),
      label: newTodo,
      completed: false,
    }));
    e.target.inputTodo.value = "";
    console.log(newTodo);
  }
  console.log(todoList)
  return (
    <div className="App">
      <header className="App-header">

        <div className='mb-3'>
          <b> - Todo list - </b>
        </div>

        <form className='input-group w-25' autoComplete='off' onSubmit={handleClick}>
          <input type="text" className="form-control" name='inputTodo' placeholder='Add todo' onChange={handleChange} />
          <button className="btn btn-primary fa fa-plus" type='submit' />
        </form>
        <Item />
      </header>
    </div>
  );
}

export default App;
