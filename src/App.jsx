
import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Home from "./Routes/Home";
import Detail from "./Routes/Detail";
import Favs from "./Routes/Favs";
import Contact from "./Routes/Contact";
import "./Styles/App.css";
import { ContextGlobal } from "./Components/utils/global.context";

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/detail/:id" element={<Detail />}/>
        <Route path="/favs" element={<Favs />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="*" element={<h1>Error 404 - No se encontró la página</h1>}/>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
