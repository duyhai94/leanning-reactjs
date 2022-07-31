import React, { useMemo, useState, useRef } from "react";
/**
 * 
 * tránh thực hiện lại logic không cần thiết
 * 
 */
const UseMemo = (props) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [courses, setCourses] = useState([]);
  const nameRef = useRef();
  const handleAdd = () => {
    setCourses([
      ...courses,
      {
        name,
        price: Number(price)
      }
    ]);
    setName("");
    setPrice("");
    nameRef.current.focus();
  };
  const total = useMemo(() => {
    const result = courses.reduce((result, prod) => result + prod.price, 0);
    return result;
  }, [courses]);
  return (
    <div>
      <input
        ref={nameRef}
        placeholder="Enter name ....."
        value={name}
        onChange={(e) => setName(e.target.value)}
      />{" "}
      <br />
      <input
        placeholder="Enter price ....."
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <br />
      <button onClick={handleAdd}>Add</button>
      <br />
      <p>Total: {total}</p>
      <br />
      <ul>
        {courses.map((course, index) => (
          <li key={index}>
            {course.name} : {course.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UseMemo;
