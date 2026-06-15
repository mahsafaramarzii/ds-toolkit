export interface DropdownItem {
    label: string;
    value: string;
  }
  
  export interface DropdownProps {
    items: DropdownItem[];
    placeholder?: string;
    onSelect?: (value: string) => void;
  }