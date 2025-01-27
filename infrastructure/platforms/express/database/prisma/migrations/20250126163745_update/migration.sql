/*
  Warnings:

  - Added the required column `clientId` to the `Motorbike` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Motorbike" ADD COLUMN     "clientId" TEXT NOT NULL;

-- CreateIndex
CREATE INDEX "Motorbike_clientId_idx" ON "Motorbike"("clientId");
