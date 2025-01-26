"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ModalProps } from "@/types/Modal";
import { DialogClose } from "@radix-ui/react-dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import React from "react";
import { RiMore2Fill } from "react-icons/ri";

export function Modal({
  open,
  setOpen,
  title,
  description,
  confirmText,
  cancelText,
  onConfirm,
  children,
}: ModalProps) {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          {description && <DialogDescription>{description}</DialogDescription>}
        </DialogHeader>
        {children}
        <DialogFooter>
          {cancelText && (
            <DialogClose asChild>
              <Button variant="ghost">{cancelText}</Button>
            </DialogClose>
          )}
          {confirmText && <Button onClick={onConfirm}>{confirmText}</Button>}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
