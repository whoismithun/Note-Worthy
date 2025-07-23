import {
  // REMOVE BrowserRouter as Router from here
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import React from "react";
import { AuthProvider, useAuth } from "./context/AuthContext";

// Import Pages
import HomePage from "./pages/HomePage";
import CreatePage from "./pages/CreatePage";
import NoteDetailPage from "./pages/NoteDetailPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

// This is a helper component to protect routes
const PrivateRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? children : <Navigate to="/login" />;
};

// This AppContent is what will be rendered directly inside AuthProvider
const App = () => { // Renamed AppContent back to App for simplicity, as it's the main app logic
  return (
    <div className="relative h-full w-full">
      <div />
      <Routes>
        {/* Public Routes - Accessible to everyone */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

        {/* private routes - only accessible to logged in users*/}
        <Route
          path="/"
          element={
            <PrivateRoute>
              <HomePage />
            </PrivateRoute>
          }
        />
        <Route
          path="/create"
          element={
            <PrivateRoute>
              <CreatePage />
            </PrivateRoute>
          }
        />
        <Route
          path="/note/:id"
          element={
            <PrivateRoute>
              <NoteDetailPage />
            </PrivateRoute>
          }
        />
        {/* fallback to redirect users to login if they hit a non existent route */}
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </div>
  );
};

// The top-level AuthProvider should wrap the App 
const RootApp = () => { // Created a new component to explicitly show the wrapping
  return (
    <AuthProvider> 
      <App />
    </AuthProvider>
  );
};

export default RootApp; // Export RootApp as the default