import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/login";
import ProtectedRoute from "./protectedRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/"
          element={<ProtectedRoute>{/* <AppContent /> */}</ProtectedRoute>}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
