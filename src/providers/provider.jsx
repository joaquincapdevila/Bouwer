import { createContext } from "react";
import { v4 as uuidv4 } from "uuid";

const bbdd = {
  rrss: [
    { id: uuidv4(), title: "nombre", href: "#", icono: "nombre_del_icono" },
    { id: uuidv4(), title: "nombre", href: "#", icono: "nombre_del_icono" },
    { id: uuidv4(), title: "nombre", href: "#", icono: "nombre_del_icono" },
    { id: uuidv4(), title: "nombre", href: "#", icono: "nombre_del_icono" },
  ],
};

const GloblaContext = createContext();

export const Provider = ({ children }) => {
  return (
    <GlobalContext.Provider value={bbss}>{children}</GlobalContext.Provider>
  );
};

export default GloblaContext;
