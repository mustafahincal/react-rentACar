import { useEffect, useState } from "react";
import { useCustomerContext } from "../../context/CustomerContext";

function Customer() {
  const { customers, setCustomers } = useCustomerContext();
  useEffect(() => {
    fetch("https://localhost:44322/api/customers/getall")
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
      })
      .then((result) => setCustomers(result.data));
  }, []);
  return (
    <div>
      {customers.map((customer) => (
        <div
          className="py-1 px-2 hover:bg-gray-100 rounded mt-2"
          key={customer.id}
        >
          {customer.companyName}
        </div>
      ))}
    </div>
  );
}

export default Customer;
