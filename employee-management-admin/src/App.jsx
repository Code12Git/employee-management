import { Toaster } from "react-hot-toast";
import Login from "./pages/Login";
import { Route, Routes } from "react-router-dom";
import Navbar from "./base/Navbar";
import NotFound from "./pages/NotFound";

function App() {

  return (
    <div className="App">
      <Toaster />
      <Navbar />
      <Routes>
        <Route path="/admin" element={<Login />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
