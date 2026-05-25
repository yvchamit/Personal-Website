import { toast, Zoom } from "react-toastify";

export const showToast = (message) => {
  toast.success(message, {
    position: "top-center",
    autoClose: 500,
    hideProgressBar: true,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    transition: Zoom,
  });
};
