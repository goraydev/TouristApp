import React, { useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Notification = ({ message, error, setError }) => {
  setTimeout(() => {
    setError(false);
  }, 6000);

  useEffect(() => {
    toast.error(message, {
      toastId: message,
    });
  }, [error]);

  return (
    <>
      {error ? (
        <>
          <ToastContainer
            position="top-right"
            hideProgressBar={true}
            autoClose={5000}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
        </>
      ) : (
        ""
      )}
    </>
  );
};

export default Notification;
