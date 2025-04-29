"use client"

import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { Provider } from "react-redux"
import { store } from "./redux/store"
import { loadUser } from "./redux/userSlice"
import { useEffect, type ReactNode } from "react"

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
    },
  },
})

interface AppProviderProps {
  children: ReactNode
}

export function AppProvider({ children }: AppProviderProps) {
  useEffect(() => {
    // Carregar o usuário do localStorage quando o componente montar
    store.dispatch(loadUser())
    console.log("Dispatched loadUser action")
  }, [])

  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </Provider>
  )
}
