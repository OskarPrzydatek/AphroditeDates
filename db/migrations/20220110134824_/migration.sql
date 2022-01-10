-- CreateTable
CREATE TABLE "Announcement" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "age" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "photo" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "town" TEXT NOT NULL,
    "gender" TEXT NOT NULL,
    "interestedIn" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,
    CONSTRAINT "Announcement_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Announcement_userId_key" ON "Announcement"("userId");
