-- CreateTable
CREATE TABLE "DriverHistorical" (
    "id" TEXT NOT NULL,
    "driverId" TEXT NOT NULL,
    "motorbikeId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "DriverHistorical_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "DriverHistorical_driverId_idx" ON "DriverHistorical"("driverId");

-- CreateIndex
CREATE INDEX "DriverHistorical_motorbikeId_idx" ON "DriverHistorical"("motorbikeId");

-- AddForeignKey
ALTER TABLE "DriverHistorical" ADD CONSTRAINT "DriverHistorical_driverId_fkey" FOREIGN KEY ("driverId") REFERENCES "Driver"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DriverHistorical" ADD CONSTRAINT "DriverHistorical_motorbikeId_fkey" FOREIGN KEY ("motorbikeId") REFERENCES "Motorbike"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
