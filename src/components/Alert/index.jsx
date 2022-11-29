import * as Constant from "./constants";
import { toast, ToastContainer } from "react-toastify";

function Alert(message, type = "default") {
  let sendAlert;
  if (type === "info") {
    sendAlert = toast.info(message, Constant.ALERT_OPTIONS);
  } else if (type === "success") {
    sendAlert = toast.success(message, Constant.ALERT_OPTIONS);
  } else if (type === "error") {
    sendAlert = toast.error(message, Constant.ALERT_OPTIONS);
  } else if (type === "warning") {
    sendAlert = toast.warn(message, Constant.ALERT_OPTIONS);
  } else {
    sendAlert = toast(message, Constant.ALERT_OPTIONS);
  }

  return sendAlert;
}

export default Alert;

export const AlertContainer = () => (
  <ToastContainer {...Constant.ALERT_CONTAINER_OPTIONS} />
);
