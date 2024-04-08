import { createContext, useContext, useState } from "react";
// name should be capital 1st letter
type ModelOutputContextType = {
  data: string;
  setData: React.Dispatch<React.SetStateAction<string>>;
};
const ModelOutputContext = createContext<ModelOutputContextType | undefined>({
    data: "",
    setData: () => {},
}); // default value

// will use this hook to access all the states globally
export const useOutput = () => {
  return useContext(ModelOutputContext);
};

type ProviderProps ={
    children: React.ReactNode
}
export const OutputProvider = ({ children }:ProviderProps) => {
  const [data, setData] = useState("");
  return (
    <ModelOutputContext.Provider
      value={{
        data,
        setData,
      }}
    >
      {children}
    </ModelOutputContext.Provider>
  );
};
