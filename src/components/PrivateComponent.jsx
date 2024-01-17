import { Navigate } from "react-router-dom";
import { getLocalItem } from "utils/functions";
export default function PrivateComponent({ children }) {
  // const isAuth = false;
  const isAuth = getLocalItem('token');
  if (!isAuth) {
    return <Navigate to={"/login"} replace={true} />;
  }
  return [children];
}
