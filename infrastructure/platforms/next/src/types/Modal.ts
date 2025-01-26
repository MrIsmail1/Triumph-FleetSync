import { ReactNode } from "react";

export interface ModalProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  title?: string;
  description?: string;
  confirmText?: string;
  cancelText?: string;
  onConfirm?: () => void;
  children?: ReactNode;
}
