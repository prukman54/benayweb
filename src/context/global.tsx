import React, { createContext, useState, ReactNode, useEffect } from "react";
import useSupabaseClient from "@/utils/supabase/client";

interface GlobalContextProps {
  user: any;
}

export const GlobalContext = createContext<GlobalContextProps>(
  {} as GlobalContextProps
);

interface GlobalProviderProps {
  children: ReactNode;
}

export const GlobalProvider: React.FC<GlobalProviderProps> = ({ children }) => {
  const supabase = useSupabaseClient();
  const [user, setUser] = useState<null | any>(null);

  useEffect(() => {
    (async () => {
      const { data, error } = await supabase.auth.getUser();

      if (data) {
        setUser(data?.user || null);
      }

      if (error) {
        setUser(null);
      }
    })();
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        user,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
