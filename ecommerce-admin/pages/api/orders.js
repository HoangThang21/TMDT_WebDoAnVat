import {mongooseConnect} from "@/lib/mongoose";
import {Order} from "@/models/Order";

export default async function handler(req,res) {
  await mongooseConnect();
  if (req.method === 'GET') {

    res.json(await Order.find().sort({createdAt:-1}));
  }
  if (req.method === 'POST') {
    const {id}= req.query;
    const oderDoc = await Order.findOne({_id:id});
    console.log(!oderDoc.paid);
    if(oderDoc){
      await Order.findOneAndUpdate({_id:id},{paid:!oderDoc.paid});
    }
    else{

    }
    res.json('ok');
  }
}