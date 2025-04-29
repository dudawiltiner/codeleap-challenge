import { useRouter } from "next/navigation";
import { createContext, ReactNode, useContext } from "react";

const RouterContext = createContext({});

export const useRouterContext = () => useContext(RouterContext);

interface AppRouterProviderProps {
  children: ReactNode;
}

export const AppRouterProvider = ({ children }: AppRouterProviderProps) => {
  const router = useRouter();

  return (
    <RouterContext.Provider value={{ router }}>
      {children}
    </RouterContext.Provider>
  );
};
