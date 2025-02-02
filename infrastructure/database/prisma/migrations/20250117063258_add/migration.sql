/*
  Warnings:

  - You are about to drop the `Bike` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `MaintenanceInterval` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Bike";

-- DropTable
DROP TABLE "MaintenanceInterval";

-- CreateTable
CREATE TABLE "Maintenance" (
    "id" TEXT NOT NULL,
    "motorbikeId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "maintenanceDate" TIMESTAMP(3) NOT NULL,
    "mileageAtMaintenance" INTEGER NOT NULL,
    "maintenanceType" TEXT NOT NULL,
    "maintenanceCost" DOUBLE PRECISION NOT NULL,
    "maintenanceDescription" TEXT NOT NULL,
    "breakdownId" TEXT,
    "warrantyId" TEXT,

    CONSTRAINT "Maintenance_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Breakdown" (
    "id" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Breakdown_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Warranty" (
    "id" TEXT NOT NULL,
    "validFrom" TIMESTAMP(3) NOT NULL,
    "validUntil" TIMESTAMP(3) NOT NULL,
    "providerName" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Warranty_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Maintenance_breakdownId_key" ON "Maintenance"("breakdownId");

-- CreateIndex
CREATE UNIQUE INDEX "Maintenance_warrantyId_key" ON "Maintenance"("warrantyId");

-- CreateIndex
CREATE INDEX "Maintenance_motorbikeId_idx" ON "Maintenance"("motorbikeId");

-- AddForeignKey
ALTER TABLE "Maintenance" ADD CONSTRAINT "Maintenance_breakdownId_fkey" FOREIGN KEY ("breakdownId") REFERENCES "Breakdown"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Maintenance" ADD CONSTRAINT "Maintenance_warrantyId_fkey" FOREIGN KEY ("warrantyId") REFERENCES "Warranty"("id") ON DELETE SET NULL ON UPDATE CASCADE;
