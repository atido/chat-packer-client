import { Route, Routes } from 'react-router-dom';
import AuthentLayout from './components/AuthentLayout';
import './globals.css';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import ProfilePage from './pages/ProfilePage';
import SignupPage from './pages/SignupPage';
import TripDetailPage from './pages/TripDetailPage';
import TripListPage from './pages/TripListPage';
import ProfileEditPage from './pages/ProfileEditPage';
import IsPrivate from './components/IsPrivate';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/auth/signup" element={<SignupPage />} />
        <Route path="/auth/login" element={<LoginPage />} />

        <Route
          path="/trips"
          element={
            <IsPrivate>
              <AuthentLayout />
            </IsPrivate>
          }
        >
          <Route
            path=":id"
            element={
              <IsPrivate>
                <TripDetailPage />
              </IsPrivate>
            }
          />
          <Route
            index
            element={
              <IsPrivate>
                <TripListPage />
              </IsPrivate>
            }
          />
        </Route>

        <Route
          path="/profile"
          element={
            <IsPrivate>
              <AuthentLayout />
            </IsPrivate>
          }
        >
          <Route
            path="/profile/edit"
            element={
              <IsPrivate>
                <ProfileEditPage />
              </IsPrivate>
            }
          />
          <Route
            index
            element={
              <IsPrivate>
                <ProfilePage />
              </IsPrivate>
            }
          />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
