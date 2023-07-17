import React, { useRef, useEffect } from "react";
import { useHistory } from 'react-router-dom';
import useDocs from '../../../hooks/useDocs';
import { useAuth } from '../../../contexts/AuthContext';
import { auth } from '../../../firebase';

export default function Paypal() {
  const paypal = useRef();
  const history = useHistory();
  const { currentUser, purchaseBook } = useAuth();
  console.log("Auth UID");
  console.log(auth.currentUser.uid);

  useEffect(() => {
    window.paypal
      .Buttons({
        createOrder: (data, actions, err) => {
          return actions.order.create({
            intent: "CAPTURE",
            purchase_units: [
              {
                description: "Relationships 101: A Guide to Building Healthy Relationships",
                amount: {
                  currency_code: "USD",
                  breakdown: {
                    currency_code: "USD",
                    tax_total: {
                        value: 0.8,
                        currency_code: "USD"
                    },
                    item_total: {
                      value: 10,
                      currency_code: "USD"
                    }
                  },
                  value: 10.80
                }
              },
            ],
          });
        },
        onApprove: async (data, actions) => {
          const order = await actions.order.capture();
          purchaseBook(auth.currentUser.uid);
          console.log(order);
          history.push('/bookcase');
        },
        onError: (err) => {
          console.log(err);
        },
      })
      .render(paypal.current);
  }, []);

  return (
    <div>
      <div ref={paypal}></div>
    </div>
  );
}
