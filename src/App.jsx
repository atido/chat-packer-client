import { Route, Routes } from "react-router-dom";
import AuthentLayout from "./components/AuthentLayout";
import "./globals.css";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import ProfilePage from "./pages/ProfilePage";
import SignupPage from "./pages/SignupPage";
import TripDetailPage from "./pages/TripDetailPage";
import TripListPage from "./pages/TripListPage";
// import IsPrivate from "./components/IsPrivate";
// import IsAnon from "./components/IsAnon";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/auth/signup" element={<SignupPage />} />
        <Route path="/auth/login" element={<LoginPage />} />

        <Route path="/trips" element={<AuthentLayout />}>
          <Route path=":id" element={<TripDetailPage />} />
          <Route index element={<TripListPage />} />
        </Route>
        <Route path="/profile" element={<AuthentLayout />}>
          <Route index element={<ProfilePage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
