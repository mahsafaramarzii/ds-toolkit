export interface Column<T> {
    key: keyof T;
    header: string;
    sortable?: boolean;
  }
  
  export interface DataTableProps<T> {
    data: T[];
    columns: Column<T>[];
  }