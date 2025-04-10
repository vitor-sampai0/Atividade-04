-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_courses" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "instrument" TEXT NOT NULL,
    "level" TEXT NOT NULL,
    "duration" INTEGER NOT NULL,
    "price" REAL NOT NULL,
    "instructor" TEXT,
    "maxStudents" INTEGER,
    "concluida" BOOLEAN NOT NULL DEFAULT false,
    "criadaEm" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_courses" ("concluida", "criadaEm", "duration", "id", "instructor", "instrument", "level", "maxStudents", "price", "title") SELECT "concluida", "criadaEm", "duration", "id", "instructor", "instrument", "level", "maxStudents", "price", "title" FROM "courses";
DROP TABLE "courses";
ALTER TABLE "new_courses" RENAME TO "courses";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
