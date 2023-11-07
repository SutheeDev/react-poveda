import { Outlet } from "react-router-dom";
import { Navbar } from "../components";

const SharedSiteLayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};
export default SharedSiteLayout;
