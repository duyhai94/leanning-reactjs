/**
 * gọi API
 * gọi component mỗi khi render
 * gọi callback component thêm element vào DOM
 * callback cảu useEffect gọi sau khi component đc render (cần cleanup, hoặc dùng useLayoutEffect)
 * 
 * useEffect(callbakk(), [dependencies]
 * 
 */
 import { useEffect, useState } from "react";

 const tabs = ['posts', 'comments', 'albums']
 
 function App() {
   const [title, setTitle] = useState("");
   const [posts, setPosts] = useState([]);
   const [type, setType] = useState('posts')
 
   useEffect(() => {
     fetch(`https://jsonplaceholder.typicode.com/${type}`)
       .then((res) => res.json())
       .then((posts) => {
         setPosts(posts);
       });
   }, [type]);
 
   return (
     <div>
       {tabs.map((tab)=> (
         <button
           key={tab}
           style={type===tab? {
             color: 'red',
             border: '2px solid red'
           }:{}}
           onClick={()=>setType(tab)}
         >
           {tab}
         </button>
       ))}
       <input value={title} onChange={(e) => setTitle(e.target.value)} />
       <ul>
         {posts.map((post) => (
           <li key={post.id}>{post.title || post.name}</li>
         ))}
       </ul>
     </div>
   );
 }
 
 export default App;
 