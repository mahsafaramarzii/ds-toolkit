import type {DataTableProps, } from "./DataTable.Types";
import { useMemo, useState } from "react";
  import styles from "./DataTable.module.css";
  
  export function DataTable<
    T extends Record<string, unknown>
  >({
    data,
    columns,
  }: DataTableProps<T>) {
    
    const [sortKey, setSortKey] =
    useState<keyof T | null>(null);
  
  const [direction, setDirection] =
    useState<"asc" | "desc">("asc");
    

    const sortedData = useMemo(() => {
        if (!sortKey) {
          return data;
        }
      
        return [...data].sort((a, b) => {
          const first = String(a[sortKey]);
          const second = String(b[sortKey]);
      
          if (direction === "asc") {
            return first.localeCompare(second);
          }
      
          return second.localeCompare(first);
        });
      }, [data, sortKey, direction]);
      const handleSort = (key: keyof T) => {
        if (sortKey === key) {
          setDirection((prev) =>
            prev === "asc" ? "desc" : "asc"
          );
      
          return;
        }
      
        setSortKey(key);
        setDirection("asc");
      };
    if (!data.length) {
      return (
        <div
          data-testid="empty-state"
          className="
            rounded-xl
            border
            border-dashed
            p-8
            text-center
            text-gray-500
          "
        >
          No data available
        </div>
      );
    }
  
    return (
        
      <div className={styles.tableWrapper}>
        <table
          data-testid="data-table"
          className={styles.table}
        >
          <thead>
            <tr>
              {columns.map((column) => (
                <th
                key={String(column.key)}
                onClick={() =>
                  handleSort(column.key)
                }
                className="
                  cursor-pointer
                  border-b
                  px-4
                  py-3
                  text-left
                  font-semibold
                "
              >
                {column.header}
              
                {sortKey === column.key &&
                  (direction === "asc"
                    ? " ↑"
                    : " ↓")}
              </th>
              ))}
            </tr>
          </thead>
  
          <tbody>
          {sortedData.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {columns.map((column) => (
                  <td
                    key={String(column.key)}
                    className="
                      border-b
                      px-4
                      py-3
                    "
                  >
                    {String(
                      row[column.key]
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }