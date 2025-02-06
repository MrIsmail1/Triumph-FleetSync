-- CreateTable
CREATE TABLE "Try" (
    "id" TEXT NOT NULL,
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
    "driverId" TEXT NOT NULL,
    "motorbikeId" TEXT NOT NULL,
    "incidentType" TEXT NOT NULL,
    "comment" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "MotorbikeIncident_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Try_driverId_idx" ON "Try"("driverId");

-- CreateIndex
CREATE INDEX "Try_motorbikeId_idx" ON "Try"("motorbikeId");

-- CreateIndex
CREATE INDEX "MotorbikeIncident_driverId_idx" ON "MotorbikeIncident"("driverId");

-- CreateIndex
CREATE INDEX "MotorbikeIncident_motorbikeId_idx" ON "MotorbikeIncident"("motorbikeId");

-- AddForeignKey
ALTER TABLE "Try" ADD CONSTRAINT "Try_driverId_fkey" FOREIGN KEY ("driverId") REFERENCES "Driver"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Try" ADD CONSTRAINT "Try_motorbikeId_fkey" FOREIGN KEY ("motorbikeId") REFERENCES "Motorbike"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MotorbikeIncident" ADD CONSTRAINT "MotorbikeIncident_driverId_fkey" FOREIGN KEY ("driverId") REFERENCES "Driver"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MotorbikeIncident" ADD CONSTRAINT "MotorbikeIncident_motorbikeId_fkey" FOREIGN KEY ("motorbikeId") REFERENCES "Motorbike"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
