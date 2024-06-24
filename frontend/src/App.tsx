import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./views/Home.tsx";
import Signup from "./views/Signup.tsx";
import HostLayout from "./components/HostLayout.tsx";
import WeightLayout from "./components/WeightTracker/WeightLayout.tsx";
import WeightTrackerView from "./views/WeightTracker/WeightTrackerView.tsx";
import WeightTrackerAdd from "./views/WeightTracker/WeightTrackerAdd.tsx";

import "./App.css";


function App() {
  // Checking backend connection
  // useEffect(() => {
  //   fetch("http://localhost:5000/api")
  //     .then(res => res.json())
  //     .then(data => console.log(data));
  // }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HostLayout />}>
          <Route index element={<Home />} />
          <Route path="signup" element={<Signup /> } />
          <Route path="weightTracker" element={<WeightLayout />}>
            <Route index element={<WeightTrackerView />} />
            <Route path="add" element={<WeightTrackerAdd />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
