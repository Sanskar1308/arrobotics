import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/login";
import ProtectedRoute from "./protectedRoute";
import Register from "./components/Register";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/"
          element={<ProtectedRoute>{/* <AppContent /> */}</ProtectedRoute>}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
