import Layout from "@/components/Layout";
import { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "@/components/Spinner";
import { withSwal } from "react-sweetalert2";

function SettingsPage({ swal }) {
  const [products, setProducts] = useState([]);
  const [featuredProductId, setFeaturedProductId] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [shippingFee, setShippingFee] = useState("");

  useEffect(() => {
    setIsLoading(true);
    fetchAll().then(() => {
      setIsLoading(false);
    });
  }, []);

  async function fetchAll() {
    await axios.get("/api/products").then((res) => {
      if (res.data) {
        setProducts(res.data);
      }
    });
    await axios.get("/api/settings?name=featuredProductId").then((res) => {
      if (res.data) {
        setFeaturedProductId(res.data.value);
      }
    });
    await axios.get("/api/settings?name=shippingFee").then((res) => {
      if (res.data) {
        setShippingFee(res.data.value);
      }
    });
  }
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> parent of 0151e38 (Update settings.js)

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
<<<<<<< HEAD
<<<<<<< HEAD
      title:'Đã lưu cài đặt',
      icon: 'success'
    });
  }

>>>>>>> parent of 2b71667 (....)
=======
      title: "Đã lưu cài đặt",
      icon: "success"
=======
      title:'Đã lưu cài đặt',
      icon: 'success'
>>>>>>> parent of 2b71667 (....)
    });
  }

>>>>>>> parent of 0151e38 (Update settings.js)
  return (
    <Layout>
      <h1>Settings</h1>
      {isLoading && <Spinner />}
      {!isLoading && (
        <>
          <label>Featured product</label>
          <select
            value={featuredProductId}
            onChange={(ev) => setFeaturedProductId(ev.target.value)}
          >
            {products.length > 0 &&
              products.map((product) => (
                <option value={product._id} key={product._id}>
                  {product.title}
                </option>
              ))}
          </select>
          <label>Shipping price (in usd)</label>
          <input
            type="number"
            value={shippingFee}
            onChange={(ev) => setShippingFee(ev.target.value)}
          />
          <div>
            <button onClick={saveSettings} className="btn-primary">
              Save settings
            </button>
          </div>
        </>
      )}
    </Layout>
  );
}

export default withSwal(({ swal }) => <SettingsPage swal={swal} />);
