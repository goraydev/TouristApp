const LoginPage = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl my-2">BSC - Tourist App</h1>
      <form
        action=""
        className="container mx-auto w-11/12 flex flex-col gap-6 rounded-md form-blur backdrop-blur-xl p-2"
      >
        <div className="flex flex-col gap-2">
          <label htmlFor="user">Usuario:</label>
          <input
            type="text"
            name="user"
            id="user"
            className="bg-transparent outline-none border-b border-b-white focus:border-b-black"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="user">Contraseña:</label>
          <input
            type="password"
            name="password"
            id="password"
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
  );
};

export default LoginPage;
