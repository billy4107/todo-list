import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { deleteToTodo, ToggleToTodo } from '../actions/todoAction';

export const Item = () => {
    const dispatch = useDispatch();
    const todoList = useSelector(state => state.todo);

    return (
        <div className='item w-50'>
            {todoList.map(todos =>
                <div key={todos.id} className='item-body' >
                    {!todos.completed ? 
                <p className='m-0'>{todos.label}</p>
                :
                <s className='m-0'>{todos.label}</s>
                }
                    <div className='p-1'>
                        <button className='btn btn-success m-1 fa fa-check' onClick={() => dispatch(ToggleToTodo(todos.id))}/>
                        <button className='btn btn-danger fa fa-close' onClick={() => dispatch(deleteToTodo(todos.id))} />
                    </div>
                </div>
            )}
        </div>
    )
}
