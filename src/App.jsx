import { BrowserRouter, Routes, Route } from "react-router-dom";


import Navbar from "./components/Navbar";
import Footer from "./components/Footer";


import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Project";
import Contact from "./pages/Contact";
import Experience from "./pages/Experience";


export default function App(){


return(

<BrowserRouter>


<Navbar/>


<Routes>


<Route 
path="/"
element={<Home/>}
/>

<Route 
path="/experience"
element={<Experience/>}
/>
<Route 
path="/about"
element={<About/>}
/>


<Route 
path="/skills"
element={<Skills/>}
/>


<Route 
path="/projects"
element={<Projects/>}
/>


<Route 
path="/contact"
element={<Contact/>}
/>



</Routes>



<Footer/>


</BrowserRouter>

)

}