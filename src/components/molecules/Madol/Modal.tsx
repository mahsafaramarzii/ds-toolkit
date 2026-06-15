
import { forwardRef, useEffect } from "react";
import { createPortal } from "react-dom";
import clsx from "clsx";

import styles from "./Modal.module.css";
import type { ModalProps } from "./Modal.types";

export const Modal = forwardRef<
  HTMLDivElement,
  ModalProps
>(({ isOpen, onClose, title, children }, ref) => {
  useEffect(() => {
    const handleEscape = ( event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener(
      "keydown",
      handleEscape
    );

    return () => {
      document.removeEventListener(
        "keydown",
        handleEscape
      );
    };
  }, [onClose]

);
useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    }
  
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return createPortal(
    <div
      className={styles.overlay}
      onClick={onClose}
      data-testid="modal-overlay"
    >
      <div
        ref={ref}
        className={clsx(
          styles.modal,
          "bg-white",
          "shadow-xl",
          "p-6"
        )}
        onClick={(e) => e.stopPropagation()}
        data-testid="modal"
      >
        {title && (
          <div className="mb-4">
            <h2 className="text-xl font-semibold">
              {title}
            </h2>
          </div>
        )}

        <div>{children}</div>

        <button
          onClick={onClose}
          className="
            mt-6
            rounded-lg
            bg-gray-100
            px-4
            py-2
          "
        >
          Close
        </button>
      </div>
    </div>,
    document.body
  );
});

Modal.displayName = "Modal";