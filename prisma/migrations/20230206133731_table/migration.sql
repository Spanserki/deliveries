-- CreateTable
CREATE TABLE "Deliveries" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "id_client" TEXT NOT NULL,
    "id_delivery" TEXT NOT NULL,
    "item_name" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "end_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "clientsId" TEXT NOT NULL,
    "deliverymanId" TEXT NOT NULL,
    CONSTRAINT "Deliveries_clientsId_fkey" FOREIGN KEY ("clientsId") REFERENCES "clients" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Deliveries_deliverymanId_fkey" FOREIGN KEY ("deliverymanId") REFERENCES "deliveyman" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
