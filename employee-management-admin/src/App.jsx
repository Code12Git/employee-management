import { Toaster } from "react-hot-toast";
import Login from "./pages/Login";
import { Route, Routes } from "react-router-dom";
import Navbar from "./base/Navbar";
import NotFound from "./pages/NotFound";
import Employees from "./pages/Employees";
import PrivateRoute from "./hooks/PrivateRoute";
import Attendance from "./pages/Attendance";
import Payroll from "./pages/Payroll";

function App() {

  return (
    <div className="App">
      <Toaster />
      <Navbar />
      <Routes>
        <Route path="/admin" element={<Login />} />
        <Route path="/employee" element={<PrivateRoute><Employees /></PrivateRoute>} />
        <Route path="/attendance" element={<PrivateRoute><Attendance /></PrivateRoute>} />
        <Route path="/payroll" element={<PrivateRoute><Payroll /></PrivateRoute>} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
