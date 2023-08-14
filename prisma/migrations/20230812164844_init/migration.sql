/*
  Warnings:

  - Added the required column `nome` to the `PossiveisTrade` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "PossiveisTrade" ADD COLUMN     "nome" TEXT NOT NULL;
