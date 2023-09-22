import { RouterProvider, createBrowserRouter } from "react-router-dom";

import {
  AboutUs,
  Adventure,
  Contact,
  Culture,
  Landing,
  Pricing,
  Relax,
  SharedSiteLayout,
  Visit,
} from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <SharedSiteLayout />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
