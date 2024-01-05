import { Dispatch, SetStateAction, createContext, useState } from "react";
import { twMerge } from "tailwind-merge";
import { tv } from "tailwind-variants";

type Props = {
  children: React.ReactNode;
  classNames?: ClassNames;
};

type ClassNames = {
  base?: string;
  th?: string;
  td?: string;
  tr?: string;
};

export type Column = {
  label: string;
  key: string;
};

type TableContext = {
  columns?: Column[];
  setColumns: Dispatch<SetStateAction<never[]>>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  tableClasses: any;
  classNames?: ClassNames;
};

export const TableContext = createContext<TableContext>({
  columns: [],
  setColumns: () => {},
  tableClasses: () => {},
  classNames: {},
});

const tableClasses = tv({
  slots: {
    base: "w-full p-4 bg-zinc-100 rounded-lg",
    col: "text-start first-of-type:rounded-l-md last-of-type:rounded-r-md p-2 text-sm font-bold bg-zinc-200 text-zinc-500",
    cell: "p-2 text-sm font-medium",
  },
});

export const Table = ({ children, classNames }: Props) => {
  const [columns, setColumns] = useState([]);

  const { base } = tableClasses();

  return (
    <div className={twMerge(base(), classNames?.base)}>
      <table className="w-full">
        <TableContext.Provider
          value={{ columns, setColumns, tableClasses, classNames }}
        >
          {children}
        </TableContext.Provider>
      </table>
    </div>
  );
};

export default Table;
