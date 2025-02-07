import mongoose, { Document, Query, Schema } from "mongoose";

export interface PartPurchaseDocument extends Document {
  id: string;
  partId: string;
  quantity: number;
  costPerUnit: number;
  totalCost: string;
  status: string;
  orderDate: string;
  receivedDate?: string; // Optional
  createdAt: Date;
  updatedAt: Date;
}

const partPurchaseSchema = new Schema<PartPurchaseDocument>(
  {
    id: { type: String, required: true, unique: true },
    partId: { type: String, required: true },
    quantity: { type: Number, required: true },
    costPerUnit: { type: Number, required: true },
    totalCost: { type: String, required: true },
    status: { type: String, required: true },
    orderDate: { type: String, required: true },
    receivedDate: { type: String },
  },
  {
    timestamps: true,
  }
);

partPurchaseSchema.pre<Query<any, PartPurchaseDocument>>(
  "updateOne",
  function (next) {
    const update = this.getUpdate() as {
      status?: string;
      receivedDate?: string;
    } | null;
    if (update && update.status === "RECEIVED") {
      update.receivedDate = new Date().toISOString();
    }
    next();
  }
);

export const PartPurchaseModel = mongoose.model<PartPurchaseDocument>(
  "PartPurchase",
  partPurchaseSchema
);
