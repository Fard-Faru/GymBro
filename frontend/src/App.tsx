import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import Signup from "./views/Signup";
import HostLayout from "./components/HostLayout";

import "./App.css";

function App() {
  // Checking backend connection with sql server
  useEffect(() => {
    fetch("http://localhost:5000/api/data")
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HostLayout />}>
          <Route index element={<Home />} />
          <Route path="signup" element={<Signup />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
