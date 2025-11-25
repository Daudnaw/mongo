import express from "express";
import { getDB } from "../db.js";

const router = express.Router();

// GET ALL USERS
router.get("/", async (req, res) => {
  const users = await getDB().collection("users").find().toArray();
  res.json(users);
});

// GET USER BY ID
router.get("/:id", async (req, res) => {
  const { ObjectId } = await import("mongodb");
  const user = await getDB().collection("users").findOne({
    _id: new ObjectId(req.params.id),
  });

  if (!user) return res.status(404).json({ error: "User not found" });
  res.json(user);
});

// DELETE USER
router.delete("/:id", async (req, res) => {
  const { ObjectId } = await import("mongodb");
  const result = await getDB().collection("users").deleteOne({
    _id: new ObjectId(req.params.id),
  });
  res.json(result);
});

export default router;
