import GlobalStyles from "./styles/GlobalStyles"
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import DashbordPage from "./pages/DashbordPage"
import BookingsPage from "./pages/BookingsPage"
import UsersPage from "./pages/UsersPage"
import SettingsPage from "./pages/SettingsPage"
import AccountPage from "./pages/AccountPage"
import LoginPage from "./pages/LoginPage"
import NotFoundOage from "./pages/NotFoundOage"
import AppLayout from "./ui/AppLayout"
import CabinsPage from "./pages/CabinsPage."

const queryClient = new QueryClient({
   defaultOptions: {
      queries: {
         staleTime: 60 * 1000,
      },
   },
})

function App() {
   return (
      <>
         <QueryClientProvider client={queryClient}>
            <ReactQueryDevtools initialIsOpen={false} />
            <GlobalStyles />
            <BrowserRouter>
               <Routes>
                  <Route element={<AppLayout />}>
                     <Route index element={<Navigate replace to="dashbord" />} />
                     <Route path="dashbord" element={<DashbordPage />} />
                     <Route path="bookings" element={<BookingsPage />} />
                     <Route path="cabins" element={<CabinsPage />} />
                     <Route path="users" element={<UsersPage />} />
                     <Route path="settings" element={<SettingsPage />} />
                     <Route path="account" element={<AccountPage />} />
                  </Route>
                  <Route path="login" element={<LoginPage />} />
                  <Route path="8" element={<NotFoundOage />} />
               </Routes>
            </BrowserRouter>
         </QueryClientProvider>
      </>
   )
}



export default App
