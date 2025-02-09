-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "passwordHash" TEXT NOT NULL,
    "role" TEXT NOT NULL,
    "isVerified" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DriverHistorical" (
    "id" TEXT NOT NULL,
    "driverId" TEXT NOT NULL,
    "motorbikeId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "DriverHistorical_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "VerificationCode" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "expiresAt" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "VerificationCode_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Session" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "expiresAt" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userAgent" TEXT,

    CONSTRAINT "Session_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Maintenance" (
    "id" TEXT NOT NULL,
    "motorbikeId" TEXT NOT NULL,
    "companyOrDealerShipId" TEXT NOT NULL,
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
CREATE TABLE "Driver" (
    "id" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "companyOrDealerShipId" TEXT NOT NULL,
    "frenchLicenseNumber" TEXT NOT NULL,
    "dateDeliveryLicence" TIMESTAMP(3) NOT NULL,
    "dateExpirationLicense" TIMESTAMP(3) NOT NULL,
    "frenchTypeMotorbikeLicense" TEXT NOT NULL,
    "restrictionConditions" TEXT NOT NULL,
    "experience" TEXT NOT NULL,
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
CREATE TABLE "Breakdown" (
    "id" TEXT NOT NULL,
    "companyOrDealerShipId" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "actionTaken" TEXT NOT NULL,
    "resolved" BOOLEAN NOT NULL DEFAULT false,
    "resolutionDate" TIMESTAMP(3),
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
    "warrantyDetails" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Warranty_pkey" PRIMARY KEY ("id")
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

-- CreateTable
CREATE TABLE "Try" (
    "id" TEXT NOT NULL,
    "dealershipId" TEXT NOT NULL,
    "driverId" TEXT NOT NULL,
    "motorbikeId" TEXT NOT NULL,
    "endDate" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Try_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MotorbikeIncident" (
    "id" TEXT NOT NULL,
    "companyOrDealerShipId" TEXT NOT NULL,
    "driverId" TEXT NOT NULL,
    "motorbikeId" TEXT NOT NULL,
    "incidentType" TEXT NOT NULL,
    "comment" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "MotorbikeIncident_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE INDEX "DriverHistorical_driverId_idx" ON "DriverHistorical"("driverId");

-- CreateIndex
CREATE INDEX "DriverHistorical_motorbikeId_idx" ON "DriverHistorical"("motorbikeId");

-- CreateIndex
CREATE UNIQUE INDEX "Maintenance_breakdownId_key" ON "Maintenance"("breakdownId");

-- CreateIndex
CREATE UNIQUE INDEX "Maintenance_warrantyId_key" ON "Maintenance"("warrantyId");

-- CreateIndex
CREATE INDEX "Maintenance_motorbikeId_idx" ON "Maintenance"("motorbikeId");

-- CreateIndex
CREATE INDEX "Maintenance_companyOrDealerShipId_idx" ON "Maintenance"("companyOrDealerShipId");

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
CREATE INDEX "Breakdown_companyOrDealerShipId_idx" ON "Breakdown"("companyOrDealerShipId");

-- CreateIndex
CREATE INDEX "Fleet_companyOrDealerShipId_idx" ON "Fleet"("companyOrDealerShipId");

-- CreateIndex
CREATE INDEX "Try_driverId_idx" ON "Try"("driverId");

-- CreateIndex
CREATE INDEX "Try_motorbikeId_idx" ON "Try"("motorbikeId");

-- CreateIndex
CREATE INDEX "MotorbikeIncident_driverId_idx" ON "MotorbikeIncident"("driverId");

-- CreateIndex
CREATE INDEX "MotorbikeIncident_motorbikeId_idx" ON "MotorbikeIncident"("motorbikeId");

-- AddForeignKey
ALTER TABLE "DriverHistorical" ADD CONSTRAINT "DriverHistorical_driverId_fkey" FOREIGN KEY ("driverId") REFERENCES "Driver"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DriverHistorical" ADD CONSTRAINT "DriverHistorical_motorbikeId_fkey" FOREIGN KEY ("motorbikeId") REFERENCES "Motorbike"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Maintenance" ADD CONSTRAINT "Maintenance_companyOrDealerShipId_fkey" FOREIGN KEY ("companyOrDealerShipId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Maintenance" ADD CONSTRAINT "Maintenance_motorbikeId_fkey" FOREIGN KEY ("motorbikeId") REFERENCES "Motorbike"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Maintenance" ADD CONSTRAINT "Maintenance_breakdownId_fkey" FOREIGN KEY ("breakdownId") REFERENCES "Breakdown"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Maintenance" ADD CONSTRAINT "Maintenance_warrantyId_fkey" FOREIGN KEY ("warrantyId") REFERENCES "Warranty"("id") ON DELETE SET NULL ON UPDATE CASCADE;

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

-- AddForeignKey
ALTER TABLE "Try" ADD CONSTRAINT "Try_driverId_fkey" FOREIGN KEY ("driverId") REFERENCES "Driver"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Try" ADD CONSTRAINT "Try_motorbikeId_fkey" FOREIGN KEY ("motorbikeId") REFERENCES "Motorbike"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Try" ADD CONSTRAINT "Try_dealershipId_fkey" FOREIGN KEY ("dealershipId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MotorbikeIncident" ADD CONSTRAINT "MotorbikeIncident_driverId_fkey" FOREIGN KEY ("driverId") REFERENCES "Driver"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MotorbikeIncident" ADD CONSTRAINT "MotorbikeIncident_motorbikeId_fkey" FOREIGN KEY ("motorbikeId") REFERENCES "Motorbike"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MotorbikeIncident" ADD CONSTRAINT "MotorbikeIncident_companyOrDealerShipId_fkey" FOREIGN KEY ("companyOrDealerShipId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
