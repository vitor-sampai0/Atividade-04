-- CreateTable
CREATE TABLE "courses" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "instrument" TEXT NOT NULL,
    "level" TEXT NOT NULL,
    "duration" INTEGER NOT NULL,
    "price" REAL NOT NULL,
    "instructor" TEXT NOT NULL,
    "maxStudents" INTEGER NOT NULL,
    "concluida" BOOLEAN NOT NULL DEFAULT false,
    "criadaEm" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
