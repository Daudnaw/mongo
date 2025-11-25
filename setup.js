// skapa databas
use mytailwind;

// Skapa collections
db.createCollection("users");
db.createCollection("products");
db.createCollection("orders");

// Lägg till exempel
db.users.insertMany([
  { name: "Anka", age: 30 },
  { name: "Epok", age: 25 }
]);

db.products.insertMany([
  { name: "Lala", price: 12000 },
  { name: "Muta", price: 199 }
]);

db.orders.insertOne({
  user: "Anka",
  product: "Lala",
  date: new Date()
});
