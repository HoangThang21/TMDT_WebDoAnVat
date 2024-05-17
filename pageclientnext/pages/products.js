import Center from "@/components/Center";
import Header from "@/components/Header";
import ProductsGrid from "@/components/ProductsGrid";
import Title from "@/components/Title";
import { mongooseConnection } from "@/lib/mongoose";
import { Product } from "@/models/Product";
import { styled } from "styled-components";
import { authOptions } from "./api/auth/[...nextauth]";
import { WishedProduct } from "@/models/WishedProduct";
import { getServerSession } from "next-auth";
import Footer from "@/components/Footer";


export default function ProductsPage({products,wishedProduct}){
    return (
        <>
            <Header></Header>
            <Center>
                <Title>All products</Title>
                <ProductsGrid products={products} wishedProduct={wishedProduct}></ProductsGrid>
            </Center>
            <Footer></Footer>
        </>
    );
}

export async function getServerSideProps(ctx){

    await mongooseConnection();
    const products = await Product.find({}, null, {sort:{'_id':-1}});
    const session = await getServerSession(ctx.req, ctx.res, authOptions);
  const wishedProduct = session?.user? await WishedProduct.find({
    userEmail: session.user.email,
    product: products.map((p) => p._id.toString())
  }):[];
    return {props:{

        products: JSON.parse(JSON.stringify(products)),
        wishedProduct: wishedProduct.map( i => i.product.toString()),
    }};
}