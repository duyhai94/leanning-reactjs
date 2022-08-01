
import { Routes, Route, Link } from "react-router-dom";
import HomePages from './Home'
import AboutPages from "./About";
/**
 * element nhận function component
 * 
 */

function App() {
    return(
        <div>
            <button>
                <Link to='/'>Home</Link>
            </button>
            <button>
                <Link to='/about'>About</Link>
            </button>

            <Routes>
                <Route path="/" element={<HomePages/>}></Route>
                <Route path="/about" element={<AboutPages/>}></Route>

            </Routes>
        </div>

    )
}

export default App