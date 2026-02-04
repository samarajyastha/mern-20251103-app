"use client";

import { getAllOrders, getOrdersByUser } from "@/api/orders";
import { useEffect, useState } from "react";
import {
  FaCheck,
  FaClock,
  FaShippingFast,
  FaShoppingBasket,
} from "react-icons/fa";
import Spinner from "../Spinner";
import {
  ORDER_STATUS_CONFIRMED,
  ORDER_STATUS_DELIVERED,
  ORDER_STATUS_PENDING,
  ORDER_STATUS_SHIPPED,
} from "@/constants/order";
import { useSelector } from "react-redux";
import { ROLE_ADMIN } from "@/constants/roles";

const Card = ({ className, label, value, Icon }) => {
  return (
    <div
      className={`shadow-md rounded-xl px-8 py-6 flex items-center gap-5 border-l-4 ${className}`}
    >
      {Icon}
      <div>
        <h4>{label}</h4>
        <p className="font-bold text-3xl">{value}</p>
      </div>
    </div>
  );
};

const OrderStats = () => {
  const [loading, setLoading] = useState(false);
  const [orders, setOrders] = useState([]);

  const { user } = useSelector((state) => state.auth);

  async function getOrders() {
    setLoading(true);

    try {
      const response = user.roles.includes(ROLE_ADMIN)
        ? await getAllOrders()
        : await getOrdersByUser();

      setOrders(response);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }

    getAllOrders()
      .then((data) => setOrders(data))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }

  useEffect(() => {
    getOrders();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading)
    return (
      <div className="flex items-center justify-center py-10">
        <Spinner className="h-12 w-12 fill-primary" />
      </div>
    );

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      <Card
        label="Pending Orders"
        Icon={
          <FaClock className="text-2xl bg-amber-100 rounded-full p-3 min-w-12 h-12 text-amber-500" />
        }
        value={
          orders.filter((item) => item.status == ORDER_STATUS_PENDING).length
        }
        className="border-amber-500"
      />
      <Card
        label="Confirmed Orders"
        Icon={
          <FaShoppingBasket className="text-2xl bg-blue-100 rounded-full p-3 min-w-12 h-12 text-blue-500" />
        }
        value={
          orders.filter((item) => item.status == ORDER_STATUS_CONFIRMED).length
        }
        className="border-blue-500"
      />
      <Card
        label="Shipped Orders"
        Icon={
          <FaShippingFast className="text-2xl bg-violet-100 rounded-full p-3 min-w-12 h-12 text-violet-500" />
        }
        value={
          orders.filter((item) => item.status == ORDER_STATUS_SHIPPED).length
        }
        className="border-violet-500"
      />
      <Card
        label="Delivered Orders"
        Icon={
          <FaCheck className="text-2xl bg-green-100 rounded-full p-3 min-w-12 h-12 text-green-500" />
        }
        value={
          orders.filter((item) => item.status == ORDER_STATUS_DELIVERED).length
        }
        className="border-green-500"
      />
    </div>
  );
};

export default OrderStats;
