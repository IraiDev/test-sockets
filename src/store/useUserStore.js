import { create } from 'zustand'

const INITI_USER = {
  id: '',
  token: '',
  name: ''
}

export const useUserStore = create()((set) => ({
  user: INITI_USER,
  setUser: (user) => set(() => ({ user })),
  updateUser: (user) => set((prev) => ({ user: { ...prev, user } })),
  resetUser: () => set(() => ({ user: INITI_USER }))
}))
