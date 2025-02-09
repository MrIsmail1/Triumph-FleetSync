export interface PartPurchaseRequest {
  identifier?: string;
  partId: string;
  quantity: number;
  costPerUnit: number;
  totalCost: number;
  orderDate: string;
  receivedDate?: string;
  status: string;
}

export interface PartPurchaseResponse {
  identifier: string;
  partId: string;
  quantity: {
    value: number;
  };
  costPerUnit: {
    value: number;
  };
  totalCost: {
    value: number;
  };
  status: string;
  orderDate: string;
  receivedDate: string;
}
