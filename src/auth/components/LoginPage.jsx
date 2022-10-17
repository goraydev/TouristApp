import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import useForm from "../../hooks/useForm";
import { Notification } from "../../ui";

const admin = { user: "Admin", password: "12345" };

const LoginPage = () => {
  const [error, setError] = useState(false);
  const {
    formState: { user, password },
    onInputChange,
  } = useForm({
    user: "",
    password: "",
  });

  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!user.length || !password.length) {
      setError(true);
      return;
    }

    if (user.trim() !== admin.user || password.trim() !== admin.password) {
      setError(true);
      return;
    }

    login(user, password);
    navigate("/mapas", {
      replace: true,
    });
  };

  return (
    <div className="h-screen flex">
      <img src="../../../public/logota.png" alt="logota" className="w-5/12 object-cover" />
      <div className="self-center flex-1">
        <h1 className="text-4xl my-4 text-center">BSC - Tourist App</h1>
        <Notification
          message="Usuario no existe"
          error={error}
          setError={setError}
        />
        <form
          action=""
          onSubmit={handleSubmit}
          className="container mx-auto w-11/12 flex flex-col gap-6 rounded-md form-blur backdrop-blur-xl p-2"
          autoComplete="off"
        >
          <div className="flex flex-col gap-2">
            <label htmlFor="user">Usuario:</label>
            <input
              type="text"
              name="user"
              id="user"
              value={user}
              onChange={onInputChange}
              className="bg-transparent outline-none border-b border-b-white focus:border-b-black"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="user">Contraseña:</label>
            <input
              type="password"
              name="password"
              id="password"
              value={password}
              onChange={onInputChange}
              className="bg-transparent outline-none border-b border-b-white focus:border-b-black"
            />
          </div>

          <button
            type="submit"
            className="bg-yellow-500 p-2 rounded-md self-center hover:bg-yellow-600 hover:text-white"
          >
            Ingresar
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
