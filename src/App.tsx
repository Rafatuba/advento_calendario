import { createBrowserRouter, RouterProvider } from "react-router";
import Advento from "./components/Advento";
import Home from "./pages/Home";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    { path: "/advento", element: <Advento /> },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
