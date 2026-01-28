"use client";

import { getOrdersByUser } from "@/api/orders";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import OrderCard from "@/components/orders/Card";
import Spinner from "@/components/Spinner";

const OrdersPage = () => {
  const [loading, setLoading] = useState(true);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    getOrdersByUser()
      .then((data) => {
        setOrders(data);
      })
      .catch((error) => {
        toast.error(error?.response.data);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading)
    return (
      <div className="py-24 flex items-center justify-center">
        <Spinner className="h-16 w-16 fill-primary" />
      </div>
    );

  return (
    <section className="py-16 relative">
      <div className="w-full container px-6 mx-auto">
        <h2 className="font-manrope font-bold text-4xl leading-10 mb-10">
          Your Orders
        </h2>

        {orders.map((order) => (
          <OrderCard key={order._id} order={order} />
        ))}
      </div>
    </section>
  );
};

export default OrdersPage;
