/* eslint-disable @typescript-eslint/no-empty-function */
import { PropsWithChildren, createContext, useContext, useState } from "react";
import { api } from "../services/api";

type DbType = {
  database: "postgresql" | "mysql";
  changeDB: (db: DbType["database"]) => void;
};

const DbContext = createContext<DbType>({
  changeDB: () => {},
  database: "mysql",
});

export function DbContextProvider({ children }: PropsWithChildren) {
  const [state, setState] = useState<DbType["database"]>("mysql");

  const changeDB = (db: DbType["database"]) => {
    setState(db);
    api.defaults.headers.common["Database"] = db;
  };

  return (
    <DbContext.Provider
      value={{
        database: state,
        changeDB,
      }}
    >
      {children}
    </DbContext.Provider>
  );
}

export function useDbState() {
  const { changeDB, database } = useContext(DbContext);
  return { changeDB, database };
}
