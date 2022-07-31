import { useLayoutEffect, useState } from "react";
/**
 * cập nhập state 
 * cập nhập DOM
 * Gọi Cleanup nếu dêpndency thay đổi
 * gọi useEffeact callback
 * return laị UI
 * 
 * mục đích: thay cho useEffect vì callback của useEffect chay sau khi render Component 
 * 
 */

function App() {
  const [count, setCount] = useState(0);
  useLayoutEffect(() => {
    if (count > 3) setCount(0);
  }, [count]);
  const handleRun = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handleRun}>Run</button>
    </div>
  );
}
export default App;
