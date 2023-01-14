/*
  Warnings:

  - A unique constraint covering the columns `[cognito_id]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `User_cognito_id_key` ON `User`(`cognito_id`);
