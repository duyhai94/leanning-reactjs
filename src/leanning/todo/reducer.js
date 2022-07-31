import { SET_TODO, ADD_TODO, DELETE_TODO } from "./constant";

export const initialState = {
  todo: "",
  todos: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case SET_TODO:
      return {
        ...state,
        todo: action.payload,
      };

    case ADD_TODO:
      return {
        ...state,
        todos: [action.payload, ...state.todos],
      };

    case DELETE_TODO:
      const newTodos = [...state.todos];

      newTodos.splice(action.payload, 1);

      return {
        ...state,
        todos: newTodos,
      };

    default:
      throw new Error("Invalid Action");
  }
};

export default reducer;
