import { Outlet } from "react-router-dom";
import { Navbar } from "../components";
// import styled from "styled-components";

const SharedSiteLayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};
export default SharedSiteLayout;

// const Wrapper = styled.div`
//   height: 100vh;
// `;
