export default function (error, action, dispatch) {
  console.error(error);

  if (error.response) {
    alert(error.response.data.error);
  }

  dispatch({ type: action });
}
