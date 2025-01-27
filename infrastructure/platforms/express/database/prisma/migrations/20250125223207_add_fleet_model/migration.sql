-- CreateTable
CREATE TABLE "Fleet" (
    "id" TEXT NOT NULL,
    "clientId" TEXT NOT NULL,
    "managerId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Fleet_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Fleet_clientId_idx" ON "Fleet"("clientId");

-- CreateIndex
CREATE INDEX "Fleet_managerId_idx" ON "Fleet"("managerId");

-- AddForeignKey
ALTER TABLE "Motorbike" ADD CONSTRAINT "Motorbike_fleetId_fkey" FOREIGN KEY ("fleetId") REFERENCES "Fleet"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
