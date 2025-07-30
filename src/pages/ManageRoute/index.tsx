import { Outlet } from "react-router-dom"
import { AppSidebar } from "@/components/Layout/AppSidebar"
import Header from "@/components/Layout/Header"

function ManageRoute() {
  return (
    <div className="w-screen h-[100svh] flex justify-center items-center">
      <AppSidebar />
      <Outlet />
      <Header />
    </div>
  )
}

export default ManageRoute