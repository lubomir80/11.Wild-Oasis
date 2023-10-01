import GlobalStyles from "./styles/GlobalStyles"
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import DashbordPage from "./pages/DashbordPage"
import BookingsPage from "./pages/BookingsPage"
import UsersPage from "./pages/UsersPage"
import SettingsPage from "./pages/SettingsPage"
import AccountPage from "./pages/AccountPage"
import LoginPage from "./pages/LoginPage"
import NotFoundOage from "./pages/NotFoundOage"


function App() {
   return (
      <>
         <GlobalStyles />
         <BrowserRouter>
            <Routes>
               <Route index element={<Navigate replace to="dashbord" />} />
               <Route path="dashbord" element={<DashbordPage />} />
               <Route path="bookings" element={<BookingsPage />} />
               <Route path="users" element={<UsersPage />} />
               <Route path="settings" element={<SettingsPage />} />
               <Route path="account" element={<AccountPage />} />
               <Route path="login" element={<LoginPage />} />
               <Route path="8" element={<NotFoundOage />} />
            </Routes>
         </BrowserRouter>
      </>
   )
}



export default App
