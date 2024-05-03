import React, { useEffect, useState } from "react";
import OrderCard from "../../components/Order/OrderCard/OrderCard";
import { get, ref } from "firebase/database";
import { db } from "../../config/firebase.config";

const Orders = () => {
  const [orders, setOrders] = useState([]);

  const getOrders = async () => {
    const dbRef = ref(db, "orders");

    const snapshot = await get(dbRef);

    if (snapshot.exists()) {
      const dataOrders = Object.entries(snapshot.val()).map(([id, data]) => {
        return {
          id,
          ...data,
        };
      });

      setOrders(dataOrders);

      console.log(orders);

    } else {
      console.log('Error');
    }
  };

  useEffect(() => {
    getOrders();
  }, []);

  return <div className="orders">
    {
      orders.map( order => {
        return <OrderCard key={order.id} data={order}/>
      } )
    }
  </div>;
};

export default Orders;
