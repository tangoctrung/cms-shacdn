import { Navigate, Route, Routes } from "react-router-dom"
import useAuthStore from "./store/useAuthStore"
import LoginPage from "./pages/Auth/Login"
import PageNotFound from "./pages/PageNotFound"
import ManageRoute from "./pages/ManageRoute"
import Home from "./pages/Home"
import Retention from "./pages/Retention"
import ReportUser from "./pages/ReportUser"
import ReportOther from "./pages/ReportOther"

function App() {
  const { accessToken } = useAuthStore()
  return (
    <Routes>
      <Route path="/login" element={!accessToken ? <LoginPage /> : <Navigate to="/" />} />
      <Route element={!accessToken ? <Navigate to="/login" /> : <ManageRoute />}>
        <Route path="/" element={<Home />} />
        <Route path="/retention" element={<Retention />} />
        <Route path="/user-reports" element={<ReportUser />} />
        <Route path="/other-reports" element={<ReportOther />} />
      </Route>
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  )
}

export default App
