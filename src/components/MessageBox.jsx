import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Toaster } from "react-hot-toast";

export default function MessageBox({ message }) {
  const [showAlert, setShowAlert] = useState(!!message);
  

  useEffect(() => {
    const timer = setTimeout(() => {
      toast.error(message);

      // toast.error(message);
      setShowAlert(false);
    }, 10);

    return () => clearTimeout(timer);
  }, [message]);
  


  return (
    showAlert && (
      Toaster
    )
  );
}

MessageBox.propTypes = {
  message: PropTypes.any,
};
