import express from "express";
import { getDB } from "../db.js";
const router = express.Router();
import { ObjectId } from "mongodb";

// GET ALL PRODUCTS
router.get("/", async (req, res) => {
  const products = await getDB().collection("products").find().toArray();
  res.json(products);
});

// GET ONE PRODUCT BY ID
router.get("/:id", async (req, res) => {
  const product = await getDB().collection("products").findOne({
    _id: new ObjectId(req.params.id),
  });
  if (!product) return res.status(404).json({ error: "Product not found" });
  res.json(product);
});

// CREAE PRODUCT
router.post("/", async (req, res) => {
  const result = await getDB().collection("products").insertOne(req.body);
  res.json({ insertedId: result.insertedId });
});

// UPDATE PRODUCT
router.put("/:id", async (req, res) => {
  const result = await getDB().collection("products").updateOne(
    { _id: new ObjectId(req.params.id) },
    { $set: req.body }
  );
  res.json(result);
});

// DELETE PROUCT
router.delete("/:id", async (req, res) => {
  const result = await getDB().collection("products").deleteOne({
    _id: new ObjectId(req.params.id),
  });
  res.json(result);
});

export default router;
