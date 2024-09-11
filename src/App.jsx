import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Home from "./Routes/Home";
import Detail from "./Routes/Detail";
import Favs from "./Routes/Favs";
import Contact from "./Routes/Contact";
import "./Styles/App.css";
import { routes } from "./Components/utils/routes";

function App() {
  return (
  <>
  <Navbar/>
  <main>
    <Routes>
      <Route path={routes.home} element={<Home />} />
      <Route path="/detail/:id" element={<Detail />} />
      <Route path={routes.favs} element={<Favs />} />
      <Route path={routes.contact} element={<Contact />} />
      <Route path={routes.notFound} element={<h1>Error 404 - No se encontró la página</h1>} />
    </Routes>
  </main>
  <Footer />
  </>
  );
}

export default App;
