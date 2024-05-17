import Featured from "@/components/Featured";
import Header from "@/components/Header";
import NewProduct from "@/components/NewProduct";
import { mongooseConnection } from "@/lib/mongoose";
import { Product } from "@/models/Product";
import { WishedProduct } from "@/models/WishedProduct";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]";
import { Setting } from "@/models/Setting";
import Footer from "@/components/Footer";

export default function HomePage({
  featuredProduct,
  newProducts,
  wishedNewProduct
}) {
  return (
    <div>
      <Header></Header>
      <Featured product={featuredProduct}></Featured>
      <NewProduct
        products={newProducts}
        wishedProduct={wishedNewProduct}
      ></NewProduct>
      <Footer></Footer>
    </div>
  );
}

export async function getServerSideProps(ctx) {
  await mongooseConnection();
  const featuredProductSetting = await Setting.findOne({
    name: "featuredProductId"
  });
  const featuredProductId = featuredProductSetting.value;

  const featuredProduct = await Product.findById(featuredProductId);
  const newProducts = await Product.find({}, null, {
    sort: { _id: -1 },
    limit: 10
  });
  const session = await getServerSession(ctx.req, ctx.res, authOptions);

  const wishedNewProduct = session?.user
    ? await WishedProduct.find({
        userEmail: session.user.email,
        product: newProducts.map((p) => p._id.toString())
      })
    : [];
  return {
    props: {
      featuredProduct: JSON.parse(JSON.stringify(featuredProduct)),
      newProducts: JSON.parse(JSON.stringify(newProducts)),
      wishedNewProduct: wishedNewProduct.map((i) => i.product.toString())
    }
  };
}
