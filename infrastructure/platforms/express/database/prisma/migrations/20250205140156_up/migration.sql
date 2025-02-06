/*
  Warnings:

  - You are about to drop the column `dealershipId` on the `MotorbikeIncident` table. All the data in the column will be lost.
  - Added the required column `companyOrDealerShipId` to the `MotorbikeIncident` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "MotorbikeIncident" DROP CONSTRAINT "MotorbikeIncident_dealershipId_fkey";

-- AlterTable
ALTER TABLE "MotorbikeIncident" DROP COLUMN "dealershipId",
ADD COLUMN     "companyOrDealerShipId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "MotorbikeIncident" ADD CONSTRAINT "MotorbikeIncident_companyOrDealerShipId_fkey" FOREIGN KEY ("companyOrDealerShipId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
