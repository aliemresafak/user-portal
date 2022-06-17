import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route, Navigate, Outlet } from "react-router-dom"
import "./index.css"
import 'react-toastify/dist/ReactToastify.css';
import * as views from "./views"
import { useAuth } from "./hook"
import { AuthProvider, UsersProvider } from './context';
import { SocketProvider } from './SocketContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const PrivateOutlet = () => {
  const auth = useAuth()
  return auth.isLoggedIn ? <Outlet /> : <Navigate to="/login" />
}

const routers = (
  <BrowserRouter>
    <Routes>
      <Route element={<PrivateOutlet />}>
        <Route index element={<views.Home />} />
        <Route path="/profile/:userId" element={<views.Profile />} />
        <Route path="/users" element={<views.Users />} />
        <Route path="/active" element={<views.ActiveUsers />} />
      </Route>
      <Route path="/register" element={<views.Register />} />
      <Route path="*" element={<Navigate to="/" replace />} />
      <Route path="/login" element={<views.Login />} />
    </Routes>
  </BrowserRouter >
)

root.render(
  <React.StrictMode>
    <AuthProvider>
      <UsersProvider>
        {routers}
      </UsersProvider>
    </AuthProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
