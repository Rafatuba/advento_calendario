import { createBrowserRouter, RouterProvider } from "react-router";

import Home from "./pages/Home";
import AdventoDia from "./pages/AdventoDia";
import Advento from "./pages/Advento";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    { path: "/advento", element: <Advento /> },
    {
      path: "/advento/:id",
      element: <AdventoDia />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
