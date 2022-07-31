import { useState } from 'react'
/**
 * trạng thái của dữ liệu
 * const [state, setState] = useState(initState)
 * state: giá trị
 * setState: đặt giá trị
 * initState: khởi tạo giá trị
 */
function App() {
  
  const [todolist, setTodoList] = useState(()=> {
      return JSON.parse(localStorage.getItem("todoList")) ?? [];
  });
  const [content, setContent] = useState("");
  const addTodo = () => {
      setContent("");
      const lastTodo = todolist[todolist.length - 1] || {};
      const lastTodoID = lastTodo["id"] || 0;
      const newTodo = {
          id: lastTodoID + 1,
          text: content
      }
      setTodoList(prevTodoList => {
        const result = [...prevTodoList, newTodo];
        localStorage.setItem("todoList",JSON.stringify(result));
        return result;
      })
  }

  return (
      <div style={{padding: 32}}>
          <input type="text"
                value={content}
                onChange={(event) => setContent(event.target.value)}
          />
          <button onClick={addTodo}>Add</button>

          <ul>
              {todolist.map(todo => {
                  return (<li key={todo.id}>{todo.text}</li>)
              })}
          </ul>
      </div>
  )
}

export default App;
