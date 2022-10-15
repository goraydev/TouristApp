import { Route, Routes } from "react-router-dom";
import LoginPage from "../auth/components/LoginPage";
import { TouristRoutes } from "../TouristApp";

const AppRouter = () => {
  return (
    <div className="container mx-auto">
      <Routes>
        <Route path="login" element={<LoginPage />} />
        <Route path="/*" element={<TouristRoutes />} />
      </Routes>
    </div>
  );
};

export default AppRouter;
