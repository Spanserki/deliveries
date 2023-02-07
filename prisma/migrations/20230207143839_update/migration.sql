-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_deliveries" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "id_client" TEXT,
    "id_delivery" TEXT,
    "item_name" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "end_at" DATETIME,
    CONSTRAINT "deliveries_id_client_fkey" FOREIGN KEY ("id_client") REFERENCES "clients" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "deliveries_id_delivery_fkey" FOREIGN KEY ("id_delivery") REFERENCES "deliveyman" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_deliveries" ("created_at", "end_at", "id", "id_client", "id_delivery", "item_name") SELECT "created_at", "end_at", "id", "id_client", "id_delivery", "item_name" FROM "deliveries";
DROP TABLE "deliveries";
ALTER TABLE "new_deliveries" RENAME TO "deliveries";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
