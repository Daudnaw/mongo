# Testa mongo-API – snabbstart

Detta repo innehåller:

- `setup.js` – skapar databas och exempeldata
- `mongo-api/` – Node.js + Express API med MongoDB

---

## Snabbstart

Kopiera och klistra in i terminalen:

```bash
# 1. Klona repot
git clone git@github.com:Daudnaw/mongo.git

# 2. Skapa databasen med setup.js
cd mongo
mongosh < setup.js

# 3. Installera API-beroenden
cd mongo-api
npm install

# 4. Skapa .env-fil
echo "MONGO_URI=mongodb://127.0.0.1:27017/mytailwind" > .env
echo "PORT=4000" >> .env

# 5. Starta servern
npm run dev

# 6. Testa 
http://localhost:4000

Testa http://localhost:4000/users
Testa http://localhost:4000/products
Testa http://localhost:4000/orders
Testa http://localhost:4000/users/ID
```
Det saknas frontend just nu därför testar vi i bash om vi vill skapa en produkt eller uppdatera en product.

### Skapa en produkt

```bash
curl -X POST http://localhost:4000/api/products \
-H "Content-Type: application/json" \
-d '{"name":"Lana","price":10}'
```
### Uppdatera en produkt

```bash
curl -X PUT http://localhost:4000/api/products/PRODUKT_ID \
-H "Content-Type: application/json" \
-d '{"name":"Ny Lana","price":1500}'
```