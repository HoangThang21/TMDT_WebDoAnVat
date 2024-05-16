import { mongooseConnection } from "@/lib/mongoose";
import { Setting } from "@/models/Setting";

export default async function handle(req, res) {
  await mongooseConnection();
  if (req.method === "GET") {
    const { name } = req.query;
    console.log(await Setting.findOne({ name }));
    res.json(await Setting.findOne({ name }));
  }
}
