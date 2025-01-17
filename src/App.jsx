
import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Home from "./Routes/Home";
import Detail from "./Routes/Detail";
import Contact from "./Routes/Contact";
import Favs from "./Routes/Favs";

function App() {

  
  return (
      <div className="min-h-[40rem]">
          <Navbar/>
          <Routes>
              <Route path='/' element={<Home/>}></Route>
              <Route path='odontologo/:id' element={<Detail/>}></Route>
              <Route path='contacto' element={<Contact/>}></Route>
              <Route path='favs' element={<Favs/>}></Route>
              <Route path='*' element={<div>Not Found</div>}></Route>
          </Routes>
          <Footer/>
      </div>
  );
}

export default App;
