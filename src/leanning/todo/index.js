
/**
 * Chia nhỏ files theo tường mục
 */
import { useReducer, useRef, useEffect } from "react";
import reducer, { initialState } from "./reducer";
import { setTodo, addTodo, deleteTodo } from "./action";

const TodoApp = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { todo, todos } = state;

  //   auto focus
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, [todos]);

  //   enter to submit
  useEffect(() => {
    document.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        document.querySelector("button")?.click();
      }
    });

    return () => {
      document.removeEventListener("keydown", (e) => {
        if (e.key === "Enter") {
          document.querySelector("button")?.click();
        }
      });
    };
  }, []);

  const handleSubmit = () => {
    dispatch(addTodo(todo));
    dispatch(setTodo(""));
  };

  return (
    <div style={{ padding: "0 20px" }}>
      <h3>Todo</h3>
      <input
        type="text"
        placeholder="Enter todo..."
        value={todo}
        onChange={(e) => {
          dispatch(setTodo(e.target.value));
        }}
        ref={inputRef}
      />
      <button onClick={handleSubmit}>Add</button>
      --{">"} Press "Enter" to add
      <ul>
        {todos.map((item, index) => {
          return (
            <li key={index}>
              {item}
              <span
                style={{ fontSize: "20px", padding: "6px", cursor: "pointer" }}
                onClick={() => {
                  dispatch(deleteTodo(index));
                  inputRef.current.focus();
                }}
              >
                &times;
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TodoApp;
