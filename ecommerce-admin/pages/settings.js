import Layout from "@/components/Layout";
import Spinner from "@/components/Spinner";
import axios from "axios";
import { useEffect, useState } from "react";
import { withSwal } from "react-sweetalert2";

 function SettingsPage({swal}) {
  const [products, setProducts] = useState([]);
  const [featuredProductId, setFeaturedProductId] = useState('');
  const [productsLoading, setProductsLoading] = useState(false);
  const [featuredLoading, setFeaturedLoading] = useState(false)


  useEffect(() => {
    setProductsLoading(true);
    axios.get("/api/products").then((res) => {
      setProducts(res.data);
      setProductsLoading(false);
    });

    setFeaturedLoading(true);
    axios.get("/api/settings?name=featuredProductId").then(res => {
      setFeaturedProductId(res.data.value);
      setFeaturedLoading(false);
    });
  }, []);

  async function saveSettings(){
    await axios.put('/api/settings',{
      name: 'featuredProductId',
      value: featuredProductId,
    }).then(() => {
      swal.fire({
        title: 'Settings saved!',
        icon:'success',
      });
    });
  }
<<<<<<< HEAD
=======

  async function saveSettings() {
    setIsLoading(true);
    await axios.put("/api/settings", {
      name: "featuredProductId",
      value: featuredProductId
    });
    await axios.put("/api/settings", {
      name: "shippingFee",
      value: shippingFee
    });
    setIsLoading(false);
    swal.fire({
      title:'Đã lưu cài đặt',
      icon: 'success'
    });
  }

>>>>>>> parent of 2b71667 (....)
  return (
    <Layout>
      <h1>Settings</h1>
      {(productsLoading || featuredLoading) && <Spinner></Spinner>}
      {(!productsLoading || ! featuredLoading) && (
        <>
          <label>Featured product</label>
          <select value={featuredProductId} onChange={ev => setFeaturedProductId(ev.target.value)}>
            {products.length > 0 &&  products.map((product,index) => (
              <option key={index} value={product._id}>
                {product.title}
              </option>
            ))}
          </select>
          <div>
            <button onClick={saveSettings} className="btn-primary">Save settiings</button>
          </div>
        </>
      )}
    </Layout>
  );
}

export default withSwal(({swal}) => (
  <SettingsPage swal={swal} ></SettingsPage>
));
