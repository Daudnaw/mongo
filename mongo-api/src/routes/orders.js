import express from "express";
import { getDB } from "../db.js";
const router = express.Router();
import { ObjectId } from "mongodb";

// GET ALL ORDERS
router.get("/", async (req, res) => {
  const orders = await getDB().collection("orders").find().toArray();
  res.json(orders);
});

// GET  ORDER BY ID
router.get("/:id", async (req, res) => {
  const order = await getDB().collection("orders").findOne({
    _id: new ObjectId(req.params.id),
  });
  if (!order) return res.status(404).json({ error: "Order not found" });
  res.json(order);
});

// CREATE  ORDER
router.post("/", async (req, res) => {
  const result = await getDB().collection("orders").insertOne(req.body);
  res.json({ insertedId: result.insertedId });
});


// DELETE ORDER
router.delete("/:id", async (req, res) => {
  const result = await getDB().collection("orders").deleteOne({
    _id: new ObjectId(req.params.id),
  });
  res.json(result);
});

export default router;
