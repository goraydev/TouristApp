import { Navigate, Route, Routes } from "react-router-dom";
import { Footer, NavBar } from "../../ui";
import MapaEstrategicoPage from "../components/MapaEstrategicoPage";
import TouristPage from "../components/TouristPage";

const TouristRoutes = () => {
  return (
    <>
      <NavBar />
      <div className="container mx-auto">
        <Routes>
          <Route path="/mapa" element={<MapaEstrategicoPage />} />
          <Route path="/balance" element={<TouristPage />} />
          <Route path="/*" element={<Navigate to="/balance" />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default TouristRoutes;
