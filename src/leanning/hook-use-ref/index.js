/**
 * Lưu giá trị bất kỳ qua một tham chiếu bên ngoài fn Component
 * trả về object kiểu {curent: ....}
 * 
 */
 import { useState, useRef, useEffect } from "react";
 function App() {
   const [count, setCount] = useState(60);
   const timerId = useRef();
   const prevCount = useRef();
   useEffect(() => {
     prevCount.current = count;
   }, [count]);
   const handleStart = () => {
     if (timerId.current > 0) {
     } else {
       timerId.current = setInterval(() => {
         setCount((prevCount) => prevCount - 1);
       }, 1000);
     }
   };
   const handleStop = () => {
     clearInterval(timerId.current);
     timerId.current = -1;
   };
   console.log(count, prevCount.current);
   return (
     <div style={{ padding: "20px" }}>
       <h1>{count}</h1>
       <button onClick={handleStart}>Start</button>
       <button onClick={handleStop}>Stop</button>
     </div>
   );
 }
 
 export default App;
 