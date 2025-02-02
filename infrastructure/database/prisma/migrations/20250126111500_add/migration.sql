/*
  Warnings:

  - Added the required column `actionTaken` to the `Breakdown` table without a default value. This is not possible if the table is not empty.
  - Added the required column `clientId` to the `Breakdown` table without a default value. This is not possible if the table is not empty.
  - Added the required column `clientId` to the `Maintenance` table without a default value. This is not possible if the table is not empty.
  - Added the required column `warrantyDetails` to the `Warranty` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Breakdown" ADD COLUMN     "actionTaken" TEXT NOT NULL,
ADD COLUMN     "clientId" TEXT NOT NULL,
ADD COLUMN     "resolutionDate" TIMESTAMP(3),
ADD COLUMN     "resolved" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "Maintenance" ADD COLUMN     "clientId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Warranty" ADD COLUMN     "warrantyDetails" TEXT NOT NULL;

-- CreateIndex
CREATE INDEX "Breakdown_clientId_idx" ON "Breakdown"("clientId");

-- CreateIndex
CREATE INDEX "Maintenance_clientId_idx" ON "Maintenance"("clientId");

-- AddForeignKey
ALTER TABLE "Maintenance" ADD CONSTRAINT "Maintenance_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Breakdown" ADD CONSTRAINT "Breakdown_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
