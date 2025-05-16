-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Tag" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "label" TEXT NOT NULL,
    "emoji" TEXT,
    "bgColor" TEXT NOT NULL,
    "borderColor" TEXT NOT NULL
);
INSERT INTO "new_Tag" ("bgColor", "borderColor", "emoji", "id", "label") SELECT "bgColor", "borderColor", "emoji", "id", "label" FROM "Tag";
DROP TABLE "Tag";
ALTER TABLE "new_Tag" RENAME TO "Tag";
CREATE UNIQUE INDEX "Tag_label_key" ON "Tag"("label");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
