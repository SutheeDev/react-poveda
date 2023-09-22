import { Outlet } from "react-router-dom";

const SharedSiteLayout = () => {
  return (
    <div>
      <h1>SharedSiteLayout</h1>
      <Outlet />
    </div>
  );
};
export default SharedSiteLayout;
