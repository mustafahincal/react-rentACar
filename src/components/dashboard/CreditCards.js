import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useCreditCardContext } from "../../context/CreditCardContext";
import { useUserContext } from "../../context/UserContext";
import { getCreditCards } from "../../services/creditCardService";
import { getUsers } from "../../services/userService";

function CreditCards() {
  const { creditCards, setCreditCards } = useCreditCardContext();
  useEffect(() => {
    getCreditCards().then((result) => setCreditCards(result.data));
  }, []);
  return (
    <div>
      {creditCards.map((creditCard, index) => (
        <div
          className="py-4 px-6 bg-white hover:bg-gray-100 rounded w-full mb-3 flex justify-between items-center"
          key={index}
        >
          <div>{creditCard.cardHolder}</div>
          <div>{creditCard.cardNumber}</div>
          <div>{creditCard.expirationDate}</div>
          <div>{creditCard.cvvCode}</div>
          <div>
            <NavLink
              to={`/updateCreditCard/${creditCard.id}`}
              className="btn text-sm"
            >
              Düzenle
            </NavLink>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CreditCards;
