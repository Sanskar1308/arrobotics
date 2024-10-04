import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import ProtectedRoute from "./protectedRoute";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/"
          element={<ProtectedRoute>{<Dashboard />}</ProtectedRoute>}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
