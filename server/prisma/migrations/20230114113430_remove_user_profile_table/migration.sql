/*
  Warnings:

  - You are about to drop the `UserProfile` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `UserProfile` DROP FOREIGN KEY `UserProfile_user_id_fkey`;

-- AlterTable
ALTER TABLE `User` ADD COLUMN `icon_path` VARCHAR(191) NULL;

-- DropTable
DROP TABLE `UserProfile`;
