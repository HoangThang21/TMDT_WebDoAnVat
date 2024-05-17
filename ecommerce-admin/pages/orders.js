import Layout from "@/components/Layout";
import { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "@/components/Spinner";

export default function OrdersPage() {
  const [orders, setOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isRequest, setIsRequest] = useState(true);
  useEffect(() => {
   
    if(isRequest){
      setIsLoading(true);
      axios.get("/api/orders").then((response) => {
        setOrders(response.data);
        setIsLoading(false);
        setIsRequest(false);
      });
    }
  
  }, [isRequest]);
   function DuyetOrder(id) {
     axios.post("/api/orders?id="+id).then((response) => {
      setIsRequest(true);
    });
  }
  return (
    <Layout>
      <h1>Sản phẩm</h1>
      <table className="basic">
        <thead>
          <tr>
            <th>Ngày</th>
            <th>Duyệt</th>
            <th>Thông tin</th>
            <th>Sản phẩm</th>
            <th>Chức năng</th>
          </tr>
        </thead>
        <tbody>
          {isLoading && (
            <tr>
              <td colSpan={4}>
                <div className="py-4">
                  <Spinner fullWidth={true} />
                </div>
              </td>
            </tr>
          )}
          {orders.length > 0 &&
            orders.map((order, index) => (
              <tr key={index}>
                <td>{new Date(order.createdAt).toLocaleString()}</td>
                <td className={order.paid ? "text-green-600" : "text-red-600"}>
                  {order.paid ? "YES" : "NO"}
                </td>
                <td>
                  {order.name} {order.email}
                  <br />
                  {order.city} {order.postalCode} {order.country}
                  <br />
                  {order.streetAddress}
                </td>
                <td>
                  {order.line_items.map((l) => (
                    <>
                      {l.price_data?.product_data.name} x{l.quantity}
                      <br />
                    </>
                  ))}
                </td>
                <td>
                  {order.paid ? (
                    <button
                     onClick={()=>DuyetOrder(order._id)}
                      className="text-green-500"
                    >
                      Đã duyệt
                    </button>
                  ) : (
                    <button
                      onClick={()=>DuyetOrder(order._id)}
                      className="text-red-500"
                    >
                      Chưa duyệt
                    </button>
                  )}
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </Layout>
  );
}
