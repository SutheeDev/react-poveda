import { RouterProvider, createBrowserRouter } from "react-router-dom";
import SharedSiteLayout from "./pages/SharedSiteLayout";

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
