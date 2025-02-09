import mongoose from "mongoose";

export interface SparePartDocument extends mongoose.Document {
  _id: string;
  name: string;
  partNumber: string;
  stockQuantity: number;
  reorderThreshold: number;
  purchases: mongoose.Types.ObjectId[];
  usedInMaintenance: mongoose.Types.ObjectId[];
  createdAt: string;
  updatedAt: string;
  brand?: string;
}

const sparePartSchema = new mongoose.Schema(
  {
    _id: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    partNumber: { type: String, required: true },
    stockQuantity: { type: Number, required: true },
    reorderThreshold: { type: Number, required: true },
    purchases: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "PartPurchase",
      },
    ],
    usedInMaintenance: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "MaintenancePart",
      },
    ],
    brand: { type: String },
  },
  {
    timestamps: true,
  }
);

export const SparePartModel = mongoose.model<SparePartDocument>(
  "SparePart",
  sparePartSchema
);
