import { forwardRef,useEffect,useRef,useState,} from "react";
  
  import clsx from "clsx";
  
  import styles from "./Dropdown.module.css";

  import type {
    DropdownItem,
    DropdownProps,
  } from "./Dropdown.types";
  
  export const Dropdown = forwardRef<
    HTMLDivElement,
    DropdownProps
  >(
    (
      {
        items,
        placeholder = "Select option",
        onSelect,
      },
      ref
    ) => {
      const [open, setOpen] = useState(false);
  
      const [selected, setSelected] =
        useState<string>("");
  
      const containerRef =
        useRef<HTMLDivElement>(null);
  
      useEffect(() => {
        const handleClickOutside = (
          event: MouseEvent
        ) => {
          if (
            containerRef.current &&
            !containerRef.current.contains(
              event.target as Node
            )
          ) {
            setOpen(false);
          }
        };
  
        document.addEventListener(
          "mousedown",
          handleClickOutside
        );
  
        return () => {
          document.removeEventListener(
            "mousedown",
            handleClickOutside
          );
        };
      }, []);
  
      const handleSelect = (
        item: DropdownItem
      ) => {
        setSelected(item.label);
  
        onSelect?.(item.value);
  
        setOpen(false);
      };
      const arrow = open ? "▲" : "▼";
      return (
        <div
          ref={containerRef}
          className={styles.container}
        >
          <div
            ref={ref}
            data-testid="dropdown-trigger"
            onClick={() =>
              setOpen((prev) => !prev)
            }
           
            className="
            flex items-center justify-between cursor-pointer rounded-xl border border-gray-300 bg-white
           px-4 py-3 shadow-sm transition hover:border-gray-400 ">
            <span>{selected || placeholder}</span>
            <span>{arrow}</span>
          </div>
          {open && (
            <div
              data-testid="dropdown-menu"
              className={clsx(
                styles.menu,
                "border",
                "border-gray-200",
                "bg-white",
                "shadow-md"
              )}
            >
              {items.map((item) => (
                <button
                  key={item.value}
                  onClick={() =>
                    handleSelect(item)
                  }
                  className={clsx(
                    "flex w-full justify-between  px-4 py-3 text-left transition hover:bg-gray-100",
                    selected === item.label &&
                      "bg-gray-100 font-medium"
                  )}
                  
                >
                 <span> {item.label} </span> 
                 <span> {arrow} </span> 
       </button>
                 
              ))}
            </div>
          )}
        </div>
      );
    }
  );
  
  Dropdown.displayName = "Dropdown";