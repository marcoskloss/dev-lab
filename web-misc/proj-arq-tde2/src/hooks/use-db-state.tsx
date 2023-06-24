/* eslint-disable @typescript-eslint/no-empty-function */
import { PropsWithChildren, createContext, useContext, useState } from "react";

type DbType = {
  database: "postgresql" | "mysql";
  changeDB: (db: DbType["database"]) => void;
};

const DbContext = createContext<DbType>({
  changeDB: () => {},
  database: "postgresql",
});

export function DbContextProvider({ children }: PropsWithChildren) {
  const [state, setState] = useState<DbType["database"]>("postgresql");

  const changeDB = (db: DbType["database"]) => setState(db);

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
