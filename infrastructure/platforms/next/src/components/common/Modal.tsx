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
  data,
  onShow,
  onEdit,
  onDelete,
  title,
  description,
  confirmText = "Confirm",
  cancelText = "Cancel",
  onConfirm,
  onCancel,
  children,
}: ModalProps) {
  return (
    <Dialog>
      {/* DropdownMenu for actions */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="w-8 h-8 p-0">
            <RiMore2Fill />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuSeparator />
          {/* “Edit” triggers the same Dialog, calling onEdit(user) */}
          <DialogTrigger asChild>
            <DropdownMenuItem onClick={() => onEdit?.(data)}>
              Modifier
            </DropdownMenuItem>
          </DialogTrigger>
          {/* “Delete” triggers the same Dialog, calling onDelete(user.id) */}
          <DialogTrigger asChild>
            <DropdownMenuItem onClick={() => onDelete?.(data.id)}>
              Supprimer
            </DropdownMenuItem>
          </DialogTrigger>
        </DropdownMenuContent>
      </DropdownMenu>

      {/* The Dialog’s content */}
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          {description && <DialogDescription>{description}</DialogDescription>}
        </DialogHeader>
        {children}
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="ghost">{cancelText}</Button>
          </DialogClose>
          {onConfirm && <Button onClick={onConfirm}>{confirmText}</Button>}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
