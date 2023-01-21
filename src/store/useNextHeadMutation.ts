import { create } from 'zustand'
import { useEffect } from 'react'

interface IUseNextHeadMutation {
  title: string
  setTitle: (newTitle: string) => void
}

export const useNextHeadStore = create<IUseNextHeadMutation>((set) => ({
  title: 'Loading...',
  setTitle: (newTitle: string) => set({ title: newTitle })
}))

export const useNextHeadMutation = (title: string) => {
  const { setTitle } = useNextHeadStore()

  useEffect(() => {
    setTitle(title)
  }, [])
}
