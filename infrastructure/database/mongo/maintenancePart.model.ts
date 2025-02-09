import mongoose from "mongoose";

export interface MaintenancePartDocument extends mongoose.Document {
  id: string;
  partId: string;
  maintenanceId: string;
  quantityUsed: number;
  cost: number;
  createdAt: string;
  updatedAt: string;
}

const maintenancePartSchema = new mongoose.Schema(
  {
    id: { type: String, required: true, unique: true },
    partId: { type: String, required: true },
    maintenanceId: { type: String, required: true },
    quantityUsed: { type: Number, required: true },
    cost: { type: Number, required: true },
  },
  {
    timestamps: true,
  }
);

export const MaintenancePartModel = mongoose.model<MaintenancePartDocument>(
  "MaintenancePart",
  maintenancePartSchema
);
