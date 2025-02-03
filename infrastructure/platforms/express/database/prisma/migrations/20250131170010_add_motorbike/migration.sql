/*
  Warnings:

  - Added the required column `actionTaken` to the `Breakdown` table without a default value. This is not possible if the table is not empty.
  - Added the required column `companyOrDealerShipId` to the `Breakdown` table without a default value. This is not possible if the table is not empty.
  - Added the required column `companyOrDealerShipId` to the `Maintenance` table without a default value. This is not possible if the table is not empty.
  - Added the required column `warrantyDetails` to the `Warranty` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Breakdown" ADD COLUMN     "actionTaken" TEXT NOT NULL,
ADD COLUMN     "companyOrDealerShipId" TEXT NOT NULL,
ADD COLUMN     "resolutionDate" TIMESTAMP(3),
ADD COLUMN     "resolved" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "Maintenance" ADD COLUMN     "companyOrDealerShipId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Warranty" ADD COLUMN     "warrantyDetails" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "Driver" (
    "id" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "companyOrDealerShipId" TEXT NOT NULL,
    "motorbikeId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Driver_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Motorbike" (
    "id" TEXT NOT NULL,
    "modelId" TEXT NOT NULL,
    "fleetId" TEXT,
    "companyOrDealerShipId" TEXT,
    "driverId" TEXT,
    "licensePlate" TEXT NOT NULL,
    "vehicleIdentificationNumber" TEXT NOT NULL,
    "color" TEXT NOT NULL,
    "mileage" INTEGER NOT NULL,
    "status" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Motorbike_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Fleet" (
    "id" TEXT NOT NULL,
    "companyOrDealerShipId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Fleet_pkey" PRIMARY KEY ("id")
);

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

-- CreateIndex
CREATE UNIQUE INDEX "Driver_email_key" ON "Driver"("email");

-- CreateIndex
CREATE INDEX "Driver_companyOrDealerShipId_idx" ON "Driver"("companyOrDealerShipId");

-- CreateIndex
CREATE UNIQUE INDEX "Motorbike_licensePlate_key" ON "Motorbike"("licensePlate");

-- CreateIndex
CREATE UNIQUE INDEX "Motorbike_vehicleIdentificationNumber_key" ON "Motorbike"("vehicleIdentificationNumber");

-- CreateIndex
CREATE INDEX "Motorbike_companyOrDealerShipId_idx" ON "Motorbike"("companyOrDealerShipId");

-- CreateIndex
CREATE INDEX "Motorbike_driverId_idx" ON "Motorbike"("driverId");

-- CreateIndex
CREATE INDEX "Motorbike_fleetId_idx" ON "Motorbike"("fleetId");

-- CreateIndex
CREATE INDEX "Fleet_companyOrDealerShipId_idx" ON "Fleet"("companyOrDealerShipId");

-- CreateIndex
CREATE INDEX "Breakdown_companyOrDealerShipId_idx" ON "Breakdown"("companyOrDealerShipId");

-- CreateIndex
CREATE INDEX "Maintenance_companyOrDealerShipId_idx" ON "Maintenance"("companyOrDealerShipId");

-- AddForeignKey
ALTER TABLE "Maintenance" ADD CONSTRAINT "Maintenance_companyOrDealerShipId_fkey" FOREIGN KEY ("companyOrDealerShipId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Maintenance" ADD CONSTRAINT "Maintenance_motorbikeId_fkey" FOREIGN KEY ("motorbikeId") REFERENCES "Motorbike"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Driver" ADD CONSTRAINT "Driver_companyOrDealerShipId_fkey" FOREIGN KEY ("companyOrDealerShipId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Motorbike" ADD CONSTRAINT "Motorbike_modelId_fkey" FOREIGN KEY ("modelId") REFERENCES "ModelMotorbike"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Motorbike" ADD CONSTRAINT "Motorbike_companyOrDealerShipId_fkey" FOREIGN KEY ("companyOrDealerShipId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Motorbike" ADD CONSTRAINT "Motorbike_driverId_fkey" FOREIGN KEY ("driverId") REFERENCES "Driver"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Motorbike" ADD CONSTRAINT "Motorbike_fleetId_fkey" FOREIGN KEY ("fleetId") REFERENCES "Fleet"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Breakdown" ADD CONSTRAINT "Breakdown_companyOrDealerShipId_fkey" FOREIGN KEY ("companyOrDealerShipId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Fleet" ADD CONSTRAINT "Fleet_companyOrDealerShipId_fkey" FOREIGN KEY ("companyOrDealerShipId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
