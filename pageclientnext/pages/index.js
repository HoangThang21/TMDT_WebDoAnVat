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
import { useTranslation } from 'react-i18next';
import '@/i18n/i18n.js';

export default function HomePage({
  featuredProduct,
  newProducts,
  wishedNewProduct
}) {
  const {t}= useTranslation();
  return (
    <div>
      
      <Header t={t}></Header>
      <Featured product={featuredProduct}></Featured>
      <NewProduct
        products={newProducts}
        wishedProduct={wishedNewProduct}
      ></NewProduct>
      <Footer t={t}></Footer>
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
