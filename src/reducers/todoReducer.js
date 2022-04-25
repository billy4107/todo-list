import { ADD_TO_TODO } from "../actions/todoAction";
import { DELETE_TO_TODO } from "../actions/todoAction";
import { TOGGLE_TO_TODO } from "../actions/todoAction";

const initialState = {
    todo: [],
}

export function todoReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_TO_TODO:
            return {
                ...state,
                todo: [...state.todo, action.payload],
            };

        case DELETE_TO_TODO:
            return {
                ...state,
                todo: state.todo.filter(todo => todo.id !== action.payload),
            };
        case TOGGLE_TO_TODO:
            return {
                todo: state.todo.map(todo =>
                    (todo.id === action.payload)
                        ? { ...todo, completed: !todo.completed }
                        : todo
                )
            };
        default:
            return state
    }

}