import { Toaster } from "react-hot-toast";
import Login from "./pages/Login";
import { Route, Routes } from "react-router-dom";
import Navbar from "./base/Navbar";
import NotFound from "./pages/NotFound";
import Attendance from "./pages/Attendance";
import PrivateRoute from "./hooks/PrivateRoute";
import Payroll from "./pages/Payroll";

function App() {

  return (
    <div className="App">
      <Toaster />
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/attendance" element={<PrivateRoute><Attendance /></PrivateRoute>} />
        <Route path="/payroll" element={<PrivateRoute><Payroll /></PrivateRoute>} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
