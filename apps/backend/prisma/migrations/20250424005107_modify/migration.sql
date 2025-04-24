/*
  Warnings:

  - You are about to drop the column `user_id` on the `activities` table. All the data in the column will be lost.
  - You are about to drop the column `receiver_id` on the `friendships` table. All the data in the column will be lost.
  - You are about to drop the column `sender_id` on the `friendships` table. All the data in the column will be lost.
  - You are about to drop the column `user_id` on the `weekly_targets` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[sender_clerk_id,receiver_clerk_id]` on the table `friendships` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `user_clerk_id` to the `activities` table without a default value. This is not possible if the table is not empty.
  - Added the required column `receiver_clerk_id` to the `friendships` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sender_clerk_id` to the `friendships` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_clerk_id` to the `weekly_targets` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "activities" DROP CONSTRAINT "activities_user_id_fkey";

-- DropForeignKey
ALTER TABLE "friendships" DROP CONSTRAINT "friendships_receiver_id_fkey";

-- DropForeignKey
ALTER TABLE "friendships" DROP CONSTRAINT "friendships_sender_id_fkey";

-- DropForeignKey
ALTER TABLE "weekly_targets" DROP CONSTRAINT "weekly_targets_user_id_fkey";

-- DropIndex
DROP INDEX "activities_user_id_idx";

-- DropIndex
DROP INDEX "friendships_receiver_id_idx";

-- DropIndex
DROP INDEX "friendships_sender_id_idx";

-- DropIndex
DROP INDEX "friendships_sender_id_receiver_id_key";

-- DropIndex
DROP INDEX "weekly_targets_user_id_idx";

-- AlterTable
ALTER TABLE "activities" DROP COLUMN "user_id",
ADD COLUMN     "user_clerk_id" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "friendships" DROP COLUMN "receiver_id",
DROP COLUMN "sender_id",
ADD COLUMN     "receiver_clerk_id" TEXT NOT NULL,
ADD COLUMN     "sender_clerk_id" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "weekly_targets" DROP COLUMN "user_id",
ADD COLUMN     "user_clerk_id" TEXT NOT NULL;

-- CreateIndex
CREATE INDEX "activities_user_clerk_id_idx" ON "activities"("user_clerk_id");

-- CreateIndex
CREATE INDEX "friendships_sender_clerk_id_idx" ON "friendships"("sender_clerk_id");

-- CreateIndex
CREATE INDEX "friendships_receiver_clerk_id_idx" ON "friendships"("receiver_clerk_id");

-- CreateIndex
CREATE UNIQUE INDEX "friendships_sender_clerk_id_receiver_clerk_id_key" ON "friendships"("sender_clerk_id", "receiver_clerk_id");

-- CreateIndex
CREATE INDEX "weekly_targets_user_clerk_id_idx" ON "weekly_targets"("user_clerk_id");

-- AddForeignKey
ALTER TABLE "activities" ADD CONSTRAINT "activities_user_clerk_id_fkey" FOREIGN KEY ("user_clerk_id") REFERENCES "users"("clerk_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "weekly_targets" ADD CONSTRAINT "weekly_targets_user_clerk_id_fkey" FOREIGN KEY ("user_clerk_id") REFERENCES "users"("clerk_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "friendships" ADD CONSTRAINT "friendships_sender_clerk_id_fkey" FOREIGN KEY ("sender_clerk_id") REFERENCES "users"("clerk_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "friendships" ADD CONSTRAINT "friendships_receiver_clerk_id_fkey" FOREIGN KEY ("receiver_clerk_id") REFERENCES "users"("clerk_id") ON DELETE RESTRICT ON UPDATE CASCADE;
