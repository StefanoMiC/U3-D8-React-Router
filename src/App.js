import "bootstrap/dist/css/bootstrap.min.css";

import "./App.scss";
import CustomNav from "./components/CustomNav";
import Home from "./components/Home";
import ReservationForm from "./components/ReservationForm";
import ReservationList from "./components/ReservationList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./components/NotFound";
import Menu from "./components/Menu";
import PastaDetails from "./components/PastaDetails";
import ClassComponent from "./components/ClassComponent";

function App() {
  return (
    <>
      <BrowserRouter>
        <CustomNav claim="Best pasta in town!" />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/reservations" element={<ReservationList />} />
          <Route path="/book-table" element={<ReservationForm />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/detail/:pastaId/" element={<PastaDetails />} />
          <Route path="/class-component/:dynamicId" element={<ClassComponent />} />
          <Route path="*" element={<NotFound spacings="mt-5 pt-5" />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
