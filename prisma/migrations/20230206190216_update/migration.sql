-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_deliveries" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "id_client" TEXT NOT NULL,
    "id_delivery" TEXT,
    "item_name" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "end_at" DATETIME DEFAULT CURRENT_TIMESTAMP,
    "clientsId" TEXT NOT NULL,
    "deliverymanId" TEXT NOT NULL,
    CONSTRAINT "deliveries_clientsId_fkey" FOREIGN KEY ("clientsId") REFERENCES "clients" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "deliveries_deliverymanId_fkey" FOREIGN KEY ("deliverymanId") REFERENCES "deliveyman" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_deliveries" ("clientsId", "created_at", "deliverymanId", "end_at", "id", "id_client", "id_delivery", "item_name") SELECT "clientsId", "created_at", "deliverymanId", "end_at", "id", "id_client", "id_delivery", "item_name" FROM "deliveries";
DROP TABLE "deliveries";
ALTER TABLE "new_deliveries" RENAME TO "deliveries";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
