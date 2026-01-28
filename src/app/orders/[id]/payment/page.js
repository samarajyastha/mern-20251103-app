"use client";

import { confirmPayment } from "@/api/orders";
import { ORDERS_ROUTE } from "@/constants/routes";
import { toast } from "react-toastify";
import { useEffect } from "react";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import Spinner from "@/components/Spinner";

const OrderPayment = () => {
  const searchParams = useSearchParams();
  const params = useParams();

  const router = useRouter();

  useEffect(() => {
    const status = searchParams?.get("status");

    confirmPayment(params.id, status)
      .then(() => {
        toast.success("Order payment success.");
      })
      .catch((error) => {
        console.log(error);
        toast.error("Order payment failed.");
      })
      .finally(() => {
        router.replace(ORDERS_ROUTE);
      });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="py-24 flex items-center justify-center">
      <Spinner className="h-16 w-16 fill-primary" />
    </div>
  );
};

export default OrderPayment;
