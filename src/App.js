import './App.css';
import About from "./About/About";
import Home from "./Home/Home";
import {NavLink, Route, Routes} from "react-router-dom";
import {Component} from "react";
import Students from "./Students/Students";
import AddStudent from "./Students/AddStudent";




class App extends Component {
    state = {
        isLoggedIn: false
    }

    render() {

        return (
            <div className="App">
                <nav className="nav">
                    <ul>
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/about">About</NavLink></li>
                        <li><NavLink to="/student">Student List</NavLink></li>
                        <li><NavLink to="/addstudent">Add Student</NavLink></li>


                    </ul>
                </nav>

                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/student" element={<Students/>}/>
                    <Route path="/addstudent" element={<AddStudent/>}/>
                    <Route path="*" element={<h1>404 not found</h1>}/>

                </Routes>
            </div>

        )
    }

}

export default App;
