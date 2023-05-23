/*
  Warnings:

  - Added the required column `gain` to the `history_trades` table without a default value. This is not possible if the table is not empty.
  - Added the required column `stop` to the `history_trades` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "history_trades" ADD COLUMN     "gain" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "stop" DOUBLE PRECISION NOT NULL;
