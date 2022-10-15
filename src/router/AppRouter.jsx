import { Route, Routes } from "react-router-dom";
import LoginPage from "../auth/components/LoginPage";
import { TouristRoutes } from "../TouristApp";

const AppRouter = () => {
  return (
    <div className="bg-yellow-500">
      <Routes>
        <Route path="login" element={<LoginPage />} />
        <Route path="/*" element={<TouristRoutes />} />
      </Routes>
    </div>
  );
};

export default AppRouter;
