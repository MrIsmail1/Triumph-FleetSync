-- CreateTable
CREATE TABLE "Motorbike" (
    "id" TEXT NOT NULL,
    "modelId" TEXT NOT NULL,
    "licensePlate" TEXT NOT NULL,
    "vehicleIdentificationNumber" TEXT NOT NULL,
    "color" TEXT NOT NULL,
    "mileage" INTEGER NOT NULL,
    "status" TEXT NOT NULL,
    "fleetId" TEXT NOT NULL,
    "clientId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Motorbike_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Motorbike_licensePlate_key" ON "Motorbike"("licensePlate");

-- CreateIndex
CREATE UNIQUE INDEX "Motorbike_vehicleIdentificationNumber_key" ON "Motorbike"("vehicleIdentificationNumber");

-- CreateIndex
CREATE INDEX "Motorbike_fleetId_idx" ON "Motorbike"("fleetId");

-- CreateIndex
CREATE INDEX "Motorbike_clientId_idx" ON "Motorbike"("clientId");

-- AddForeignKey
ALTER TABLE "Maintenance" ADD CONSTRAINT "Maintenance_motorbikeId_fkey" FOREIGN KEY ("motorbikeId") REFERENCES "Motorbike"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
