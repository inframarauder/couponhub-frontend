import { toast } from "react-toastify";

export default function (error, action, dispatch) {
  console.error(error);

  if (error.response) {
    toast.error(error.response.data.error);
  }

  dispatch({ type: action });
}
