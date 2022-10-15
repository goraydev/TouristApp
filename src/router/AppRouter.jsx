import { Route, Routes } from "react-router-dom";
import LoginPage from "../auth/components/LoginPage";
import { TouristRoutes } from "../TouristApp";
import PrivadeRoute from "./PrivadeRoute";
import PublicRoute from "./PublicRoute";

const AppRouter = () => {
  return (
    <Routes>
      <Route
        path="login"
        element={
          <PublicRoute>
            <LoginPage />
          </PublicRoute>
        }
      />
      <Route
        path="/*"
        element={
          <PrivadeRoute>
            <TouristRoutes />
          </PrivadeRoute>
        }
      />
    </Routes>
  );
};

export default AppRouter;
