import {
  RouterProvider,
  createBrowserRouter,
  Outlet,
  ScrollRestoration,
} from "react-router-dom";

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
  Error,
} from "./pages";

const AppLayout = () => (
  <>
    <ScrollRestoration />
    <Outlet />
  </>
);

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <SharedSiteLayout />,
        children: [
          {
            index: true,
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
          {
            path: "*",
            element: <Error />,
          },
        ],
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
