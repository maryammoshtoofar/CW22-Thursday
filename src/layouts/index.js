import { Outlet } from "react-router-dom";
import Header from "./header";

export default function SharedLayout() {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
}
