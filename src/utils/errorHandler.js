import { toast } from "react-toastify";

function errorHandler(error, action, dispatch) {
  console.error(error);

  if (error.response) {
    toast.error(error.response.data.error);
  }

  dispatch({ type: action });
}

export default errorHandler;
