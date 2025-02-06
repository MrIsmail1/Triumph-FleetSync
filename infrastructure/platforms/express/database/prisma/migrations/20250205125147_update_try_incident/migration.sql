/*
  Warnings:

  - Added the required column `dealershipId` to the `MotorbikeIncident` table without a default value. This is not possible if the table is not empty.
  - Added the required column `dealershipId` to the `Try` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "MotorbikeIncident" ADD COLUMN     "dealershipId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Try" ADD COLUMN     "dealershipId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Try" ADD CONSTRAINT "Try_dealershipId_fkey" FOREIGN KEY ("dealershipId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MotorbikeIncident" ADD CONSTRAINT "MotorbikeIncident_dealershipId_fkey" FOREIGN KEY ("dealershipId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
