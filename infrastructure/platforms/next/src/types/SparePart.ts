import { PartPurchaseResponse } from "./PartPurchase";

export interface SparePartResponse {
  identifier: string;
  name: { value: string };
  partNumber: { value: string };
  stockQuantity: { value: number };
  reorderThreshold: { value: number };
  brand?: string;
  purchases?: PartPurchaseResponse[];
  usedInMaintenance?: MaintenancePart[];
}

export interface SparePartRequest {
  indentifier?: string;
  name: string;
  partNumber: string;
  stockQuantity: number;
  reorderThreshold: number;
  purchases?: PartPurchaseResponse[];
  usedInMaintenance?: MaintenancePart[];
  brand?: string;
}
