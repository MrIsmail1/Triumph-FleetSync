import { ReactNode } from "react";

export interface ModalProps {
  data: Record<string, any>;
  onShow?: (data: Record<string, any>) => void;
  onEdit?: (data: Record<string, any>) => void;
  onDelete?: (id: string) => void;
  title?: string;
  description?: string;
  confirmText?: string;
  cancelText?: string;
  onConfirm?: () => void;
  onCancel?: () => void;
  children?: ReactNode;
}
