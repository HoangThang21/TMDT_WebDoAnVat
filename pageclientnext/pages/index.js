import Featured from "@/components/Featured";
import Header from "@/components/Header";
import NewProduct from "@/components/NewProduct";
import { mongooseConnection } from "@/lib/mongoose";
import { Product } from "@/models/Product";

export default function HomePage({featuredProduct,newProducts}){

  
  return(
    <div>
      <Header></Header>
      <Featured product={featuredProduct}></Featured>
      <NewProduct products={newProducts}></NewProduct>
    </div>
  );
}

export async function getServerSideProps(){
    const featuredProductId = '65b13f76f9febd9fafd8c067';
    await mongooseConnection();
    const featuredProduct = await Product.findById(featuredProductId);
    const newProducts = await Product.find({}, null, {sort: {'_id':-1}, limit:10});
    return {
      props: {
        
        featuredProduct: JSON.parse(JSON.stringify(featuredProduct)),
        newProducts: JSON.parse(JSON.stringify(newProducts)),
      },
    };
}