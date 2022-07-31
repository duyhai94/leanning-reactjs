import { useState } from "react";
const courses = [
  {
    id: 1,
    name: "HTML, CSS"
  },
  {
    id: 2,
    name: "Javascipt"
  },
  {
    id: 3,
    name: "ReactJS"
  }
];
function App() {
  const [checked, setChecked] = useState([]);
  const handleCheck = (id) => {
    setChecked((prev) => {
      let isChecked = checked.includes(id);
      if (isChecked) {
        // uncheck
        return checked.filter((item) => item !== id);
      }
      return [...prev, id];
    });
  };
  const handleSubmit = () => {
    alert(JSON.stringify({ ids: checked }));
  };
  return (
    <div className="App">
      <h1>Two-way binding width checkbox</h1>
      {courses.map((course, index) => (
        <div key={course.id}>
          <input
            type="checkbox"
            checked={checked.includes(course.id)}
            onChange={() => handleCheck(course.id)}
          />
          {course.name}
        </div>
      ))}
      <button onClick={handleSubmit}>Register</button>
      <p>result: {JSON.stringify(checked)}</p>
    </div>
  );
}


export default App