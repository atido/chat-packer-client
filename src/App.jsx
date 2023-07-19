import { Route, Routes } from "react-router-dom";
import "./globals.css";
import HomePage from "./pages/HomePage";
import SignupPage from "./pages/SignupPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/auth/signup" element={<SignupPage />} />
      </Routes>
    </div>
  );
}

export default App;
