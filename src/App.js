import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./Pages/Home";
import Projects from "./Pages/Projects";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Pages/Footer";
import ContactUs from "./Pages/ContactUs";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Navbar/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="projects" element={<Projects/>}/>
                    <Route path="contact-us" element={<ContactUs/>}/>
                </Routes>
                <Footer/>
            </BrowserRouter>
        </div>
    );
}

export default App;
