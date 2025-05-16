/*
  Warnings:

  - You are about to drop the column `name` on the `Tag` table. All the data in the column will be lost.
  - Added the required column `bgColor` to the `Tag` table without a default value. This is not possible if the table is not empty.
  - Added the required column `borderColor` to the `Tag` table without a default value. This is not possible if the table is not empty.
  - Added the required column `label` to the `Tag` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Tag" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "label" TEXT NOT NULL,
    "emoji" TEXT NOT NULL,
    "bgColor" TEXT NOT NULL,
    "borderColor" TEXT NOT NULL
);
INSERT INTO "new_Tag" ("emoji", "id") SELECT "emoji", "id" FROM "Tag";
DROP TABLE "Tag";
ALTER TABLE "new_Tag" RENAME TO "Tag";
CREATE UNIQUE INDEX "Tag_label_key" ON "Tag"("label");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
