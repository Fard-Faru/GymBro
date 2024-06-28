import { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./views/Home";
import Signup from "./views/Signup";
import Navbar from "./components/AppNavbar";
import Footer from "./components/AppFooter";
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
  // Checking backend connection
  useEffect(() => {
    fetch("http://localhost:5000/api")
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);

  return (
    <>
      <Navbar />
      <div className="page_content" style={{ margin: "10px", padding: "10px" }}>
        <RouterProvider router={router} />
      </div>
      <Footer />
    </>
  );
}

export default App;
