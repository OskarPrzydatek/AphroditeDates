/*
  Warnings:

  - You are about to drop the column `photo` on the `Announcement` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Announcement" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "age" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "town" TEXT NOT NULL,
    "gender" TEXT NOT NULL,
    "interestedIn" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,
    CONSTRAINT "Announcement_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Announcement" ("age", "description", "gender", "id", "interestedIn", "name", "phone", "town", "userId") SELECT "age", "description", "gender", "id", "interestedIn", "name", "phone", "town", "userId" FROM "Announcement";
DROP TABLE "Announcement";
ALTER TABLE "new_Announcement" RENAME TO "Announcement";
CREATE UNIQUE INDEX "Announcement_userId_key" ON "Announcement"("userId");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
