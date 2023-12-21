import PropTypes from "prop-types";
import { useEffect, useState } from "react";

export default function MessageBox({ message }) {
  const [showAlert, setShowAlert] = useState(!!message);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAlert(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    showAlert && (
      <div
        className="bg-orange bg-opacity-20 border-l-4 border-orange text-orange-700 p-4 px-20 rounded-sm absolute right-5 top-5"
        role="alert"
      >
        <p>{message}</p>
      </div>
    )
  );
}

MessageBox.propTypes = {
  message: PropTypes.any,
};
