import { Navigate, Route, Routes } from "react-router-dom"
import useAuthStore from "./store/useAuthStore"
import LoginPage from "./pages/Auth/Login"
import Home from "./pages/Home"
import PageNotFound from "./pages/PageNotFound"

function App() {
  const { accessToken } = useAuthStore()
  return (
    <Routes>
      <Route path="/login" element={!accessToken ? <LoginPage /> : <Navigate to="/" />} />
      <Route path="/" element={!accessToken ? <Navigate to="/login" /> : <Home />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  )
}

export default App
