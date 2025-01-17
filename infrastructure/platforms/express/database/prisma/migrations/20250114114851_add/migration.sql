-- CreateTable
CREATE TABLE "Bike" (
    "id" TEXT NOT NULL,
    "clientId" TEXT,
    "model" TEXT NOT NULL,
    "kilometrage" INTEGER NOT NULL,
    "lastMaintenace" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Bike_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MaintenanceInterval" (
    "id" TEXT NOT NULL,
    "model" TEXT NOT NULL,
    "kilometersInterval" INTEGER NOT NULL,
    "timeIntervalInMonths" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "MaintenanceInterval_pkey" PRIMARY KEY ("id")
);
