import { create } from "zustand";
import { persist } from "zustand/middleware";

const AUTH_KEY = "auth";
interface AuthState {
  accessToken?: string | null;
  refreshToken?: string | null;
  user: null;
  setTokens: (accessToken: string, refreshToken?: string) => void;
  setUser: (user: any) => void;
  logout: () => void;
}

const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      accessToken: null,
      refreshToken: null,
      user: null,
      setTokens: (accessToken, refreshToken) =>
        set({ accessToken, refreshToken }),
      setUser: (user) => set({ user }),
      logout: async () => {
        set({ accessToken: null, refreshToken: null, user: null });
      },
    }),
    {
      name: AUTH_KEY,
      // storage: createJSONStorage(() => sessionStorage),
    }
  )
);

export default useAuthStore;
