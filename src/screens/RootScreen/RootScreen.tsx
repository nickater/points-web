import { Outlet } from "react-router-dom";
import { Navbar } from "../../components/organisms/Navbar/Navbar";

export const RootScreen = () => {
  return (
    <div className="h-screen">
      <Navbar />
      <Outlet />
    </div>
  );
};
