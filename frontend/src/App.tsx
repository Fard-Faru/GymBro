import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import Signup from "./views/Signup";
import Login from "./views/Login";
import HostLayout from "./components/HostLayout";
import LoggedInLayout from "./components/LoggedInLayout";
import Dashboard from "./views/Dashboard";
import WeightLayout from "./components/WeightTracker/WeightLayout.tsx";
import WeightTrackerView from "./views/WeightTracker/WeightTrackerView.tsx";
import WeightTrackerAdd from "./views/WeightTracker/WeightTrackerAdd.tsx";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HostLayout />}>
          <Route index element={<Home />} />
          <Route path="signup" element={<Signup />} />
          <Route path="login" element={<Login />} />
        </Route>
        <Route path="/" element={<LoggedInLayout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="signup" element={<Signup />} />
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
