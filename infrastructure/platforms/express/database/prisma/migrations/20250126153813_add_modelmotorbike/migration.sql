/*
  Warnings:

  - You are about to drop the column `clientId` on the `Motorbike` table. All the data in the column will be lost.
  - You are about to drop the column `modelId` on the `Motorbike` table. All the data in the column will be lost.
  - Added the required column `modelMotorbikeId` to the `Motorbike` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Maintenance_motorbikeId_idx";

-- DropIndex
DROP INDEX "Motorbike_clientId_idx";

-- DropIndex
DROP INDEX "Motorbike_fleetId_idx";

-- AlterTable
ALTER TABLE "Motorbike" DROP COLUMN "clientId",
DROP COLUMN "modelId",
ADD COLUMN     "modelMotorbikeId" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "ModelMotorbike" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "brand" TEXT NOT NULL,
    "maintenanceIntervalKm" INTEGER NOT NULL,
    "maintenanceIntervalTimeMonths" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ModelMotorbike_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Motorbike" ADD CONSTRAINT "Motorbike_modelMotorbikeId_fkey" FOREIGN KEY ("modelMotorbikeId") REFERENCES "ModelMotorbike"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
