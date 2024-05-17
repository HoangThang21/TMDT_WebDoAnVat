import { mongooseConnection } from "@/lib/mongoose";
import { Order } from "@/models/Order";

export default async function handler(req, res) {
  await mongooseConnection();
  if (req.method === "GET") {
    const {email}=req.query;
    res.json(await Order.find({email:email}));
  }
}
