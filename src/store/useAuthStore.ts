import { formatDate } from "@/lib/utils";
import { create } from "zustand";
import { persist } from "zustand/middleware";

const AUTH_KEY = "auth";
interface AuthState {
  accessToken?: string | null;
  refreshToken?: string | null;
  user: null;
  setTokens: (accessToken: string, refreshToken?: string) => void;
  setUser: (user: any) => void;
  setDate: (dateFrom: string, dateTo: string) => void;
  logout: () => void;
  dateFrom: string;
  dateTo: string;
}

const today = new Date();
const sevenDaysAgo = new Date();
sevenDaysAgo.setDate(today.getDate() - 6);

const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      accessToken: null,
      refreshToken: null,
      user: null,
      dateFrom: formatDate(new Date()),
      dateTo: formatDate(sevenDaysAgo),
      setTokens: (accessToken, refreshToken) =>
        set({ accessToken, refreshToken }),
      setUser: (user) => set({ user }),
      logout: async () => {
        set({ accessToken: null, refreshToken: null, user: null });
      },
      setDate: (dateFrom: string, dateTo: string) => set({ dateFrom, dateTo }),
    }),
    {
      name: AUTH_KEY,
      // storage: createJSONStorage(() => sessionStorage),
    }
  )
);

export default useAuthStore;
