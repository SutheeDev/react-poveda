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
    children: [
      {
        path: "Landing",
        element: <Landing />,
      },
      {
        path: "AboutUs",
        element: <AboutUs />,
      },
      {
        path: "Visit",
        element: <Visit />,
      },
      {
        path: "Adventure",
        element: <Adventure />,
      },
      {
        path: "Culture",
        element: <Culture />,
      },
      {
        path: "Relax",
        element: <Relax />,
      },
      {
        path: "Pricing",
        element: <Pricing />,
      },
      {
        path: "Contact",
        element: <Contact />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
