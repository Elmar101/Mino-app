import { createContext, useContext, useState } from "react";
import { IStateAuth } from "./model";

const defaultValue: IStateAuth = { name: "", sname: ""};

export const stateCreateContextAuth = createContext<IStateAuth>(defaultValue);

export const setCreateContextStateAuth = createContext< React.Dispatch<React.SetStateAction<IStateAuth>> | undefined>(undefined);

interface IAuthProvider {
  children: React.ReactNode;
}

const AuthProvider = (props: IAuthProvider) => {
  const [state, setState] = useState<IStateAuth>(defaultValue);

  return (
    <stateCreateContextAuth.Provider value={state}>
      <setCreateContextStateAuth.Provider value={setState}>
        {props.children}
      </setCreateContextStateAuth.Provider>
    </stateCreateContextAuth.Provider>
  );
};

export default AuthProvider;


export const useAuthContext = () => {
  const state = useContext(stateCreateContextAuth);
  const setState = useContext(setCreateContextStateAuth);

  if(!state) throw new Error("state was called outside of the stateAuth provider");
  if(!setState) throw new Error("state was called outside of the setState provider");

  return [ state, setState ] as const;
};











