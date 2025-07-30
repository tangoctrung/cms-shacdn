import { BookUser, ChartArea, Home, LogOut, Repeat } from "lucide-react"
import { DEFAULT_LOGO, NO_AVATAR } from "@/endpoint/config"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import useAuthStore from "@/store/useAuthStore"

// Menu items.
const items = [
  {
    title: "Home",
    url: "/",
    icon: Home,
  },
  {
    title: "Retention",
    url: "/retention",
    icon: Repeat,
  },
  {
    title: "User reports",
    url: "/user-reports",
    icon: BookUser,
  },
  {
    title: "Other reports",
    url: "/other-reports",
    icon: ChartArea,
  },
]

export function AppSidebar() {
  const [open, setOpen] = useState<boolean>(false)
  const { setTokens, setUser } = useAuthStore()
  const navigate = useNavigate()
  const handleClickSidebar = (e: any) => {
    if (!open) {
      if (e.target.id === "app-sidebar") {
        setOpen(true)
        return
      }
    }
  }

  const handleLogout = () => {
    setTokens("", "")
    setUser(null)
    navigate("/login")
  }
  return (
    <div className="">
      <div
        className={`fixed z-[100] p-[10px] top-0 left-0 h-[100svh] bg-sidebar-accent-foreground text-white overflow-hidden transition-all duration-300 ${open ? "w-[250px]" : "w-[60px]"}`}
        id="app-sidebar"
        onClick={handleClickSidebar}
      >
        <div className="w-full flex items-center gap-3">
          <img src={DEFAULT_LOGO} alt="" className="w-10 h-10 rounded-lg" />
          <div>
            <p className="line-clamp-1">CMS Dragon</p>
          </div>
        </div>
        <div className="w-full mt-10">
          {items.map((item, index) => (
            <div
              key={index}
              className={`w-full flex items-center py-[10px] my-3 px-[10px] cursor-pointer hover:bg-bg2 rounded-md ${window.location.pathname === item.url ? "bg-bg2" : ""
                }`}
              onClick={() => navigate(item.url)}
            >
              <item.icon className="w-5 h-5" />
              {open && <p className="line-clamp-1 ml-3 text-sm w-[calc(100%-60px)]">{item.title}</p>}
            </div>
          ))}
        </div>
        <div className="absolute bottom-[10px] left-[10px] h-12 w-[calc(100%-20px)] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10">
              <img src={NO_AVATAR} alt="" className="w-10 h-10 rounded-lg" />
            </div>
            <div>
              <p className="line-clamp-1 max-w-[135px] text-sm font-bold">Admin</p>
              <p className="line-clamp-1 max-w-[135px] text-sm text-bg7">admin@gmail.com</p>
            </div>
          </div>
          <div className="p-[10px] rounded-full bg-bgButton cursor-pointer hover:bg-bgButtonHover" onClick={handleLogout}>
            <LogOut size={18} />
          </div>
        </div>
      </ div>
      <div className={`fixed ${open ? "z-[100]" : "-z-10"} left-[250px] w-screen h-screen top-0`} onClick={() => setOpen(false)}></div>
    </div>
  )
}