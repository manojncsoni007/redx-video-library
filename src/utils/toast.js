import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function showToast(type, message) {
  return toast(message, {
    type: type,
    position: "top-right",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
}

