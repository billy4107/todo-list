export const ADD_TO_TODO = 'ADD_TO_TODO';
export const DELETE_TO_TODO = 'DELETE_TO_TODO';
export const TOGGLE_TO_TODO = 'UPDATE_TO_TODO';

export function addToTodo(data) {
    return {
        type: ADD_TO_TODO,
        payload: data
    }
}

export function deleteToTodo(id) {
    return {
        type: DELETE_TO_TODO,
        payload: id,
    }
}

export const ToggleToTodo = (id) => ({
    type: TOGGLE_TO_TODO,
    payload: id,
  });
