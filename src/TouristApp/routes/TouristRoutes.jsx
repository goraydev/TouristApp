import { Navigate, Route, Routes } from "react-router-dom";
import MapaEstrategicoPage from "../components/MapaEstrategicoPage";
import TouristPage from "../components/TouristPage";

const TouristRoutes = () => {
  return (
    <div className="container mx-auto">
      <Routes>
        <Route path="/mapa" element={<MapaEstrategicoPage />} />
        <Route path="/balance" element={<TouristPage />} />
        <Route path="/" element={<Navigate to="/balance" />} />
      </Routes>
    </div>
  );
};

export default TouristRoutes;
