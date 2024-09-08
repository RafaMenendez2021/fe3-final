
import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Home from "./Routes/Home";
import Detail from "./Routes/Detail";
import Favs from "./Routes/Favs";
import Contact from "./Routes/Contact";


function App() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path={routes.home} element={<Home />}/>
      <Route path="/detail/:id" element={<Detail />}/>
      <Route path={routes.favs} element={<Favs />}/>
      <Route path={routes.contact} element={<Contact />}/>
    </Routes>
    <Footer/>
    </>
  );
}

export default App;
