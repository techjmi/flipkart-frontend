import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext(null);
export const Dataprovider=({children})=>{
    const [account , setAccount]= useState("")
    return(
        <AuthContext.Provider value={{account, setAccount}}>
  {children}
        </AuthContext.Provider>
    )
}
// export const useAuth = () => {
  
//     return useContext(AuthContext);
//   };