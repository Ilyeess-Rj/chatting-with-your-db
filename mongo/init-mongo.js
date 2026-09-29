// ============================================================
// MongoDB initialisation for "Chatting with Your DB"
// Runs once, automatically, on the first start of the mongo container
// (docker-entrypoint-initdb.d). Safe to run manually with mongosh too:
//   mongosh "<admin connection string>" mongo/init-mongo.js
// ============================================================

const dbName = process.env.MONGO_INITDB_DATABASE || "stock_db";
const appUser = process.env.MONGO_APP_USER || "n8n_app";
const appPassword = process.env.MONGO_APP_PASSWORD;

if (!appPassword) {
  throw new Error("MONGO_APP_PASSWORD is not set. Refusing to create a user without a password.");
}

const stock = db.getSiblingDB(dbName);

// 1) Collection with a *soft* validator.
//    validationAction "warn" only logs violations: the AI agent may insert
//    documents with slightly different types, and we do not want hard failures.
if (!stock.getCollectionNames().includes("products")) {
  stock.createCollection("products", {
    validator: {
      $jsonSchema: {
        bsonType: "object",
        required: ["product_name", "category", "price_tnd", "stock"],
        properties: {
          product_name: { bsonType: "string" },
          category: { bsonType: "string" },
          price_tnd: { bsonType: "string" },
          stock: { bsonType: ["int", "long", "double", "string"] }
        }
      }
    },
    validationLevel: "moderate",
    validationAction: "warn"
  });
}

// 2) Indexes
//    - product_name is UNIQUE: the Update and Delete tools identify a product
//      by product_name, so duplicates would make them ambiguous.
stock.products.createIndex({ product_name: 1 }, { unique: true, name: "uniq_product_name" });
stock.products.createIndex({ category: 1 }, { name: "idx_category" });
stock.products.createIndex({ numeric_price: 1 }, { name: "idx_numeric_price" });
stock.products.createIndex({ brand: 1 }, { name: "idx_brand" });

// 3) Least-privilege application user (this is what n8n connects with)
if (!stock.getUser(appUser)) {
  stock.createUser({
    user: appUser,
    pwd: appPassword,
    roles: [{ role: "readWrite", db: dbName }]
  });
}

print(`[init-mongo] database "${dbName}" ready, user "${appUser}" created.`);
