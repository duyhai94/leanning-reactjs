/**
 * HOC : 
 * giúp việc kiểm tra component có props thay đổi hay không từ đó quyết định việc render component thường kết hợp vs useCallbak
 */
import { useState } from "react";
import Content  from "./content";
function App() {
  const [count, setCount] = useState(0);
  const handleCount = () => {
    setCount(count + 1)
  }

  return(
    <div>
      <Content/>
      <h1>{count}</h1>
      <button onClick={handleCount}>Click</button>
    </div>
  )
}
export default App