const Footer = () => {
  const getDate = () => {
    return new Date().getFullYear();
  };

  return (
    <footer className="fixed bottom-0 flex justify-center form-blur backdrop-blur-xl w-full px-2 py-1">
      Derechos reservados &copy;{getDate()}. Desarrollado por Aguedo Yanac
      Gerson y Garro Torres Luis
    </footer>
  );
};

export default Footer;
