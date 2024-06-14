import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./views/Home";
import Signup from "./views/Signup";
import Navbar from "./components/AppNavbar";
import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
]);

function App() {
  return (
    <>
      <Navbar />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
