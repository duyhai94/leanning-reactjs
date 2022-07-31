/**
 * Tránh tạo ra func không cần thiết
 * 
 */

 import { useState, useCallback } from "react";
 import Content from "./content";
 function App() {
   const [count, setCount] = useState(60);
   const handleIncrease = useCallback(() => {
     setCount((prevCount) => prevCount + 1);
   }, []);
   return (
     <div style={{ padding: "10px 32px" }}>
       <h1>{count}</h1>
       <Content onIncrease={handleIncrease} />
     </div>
   );
 }
 
 export default App;
 