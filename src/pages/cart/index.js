import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTotals } from "../../redux/features/cart";
import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Cart() {
  const { cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTotals());
  }, []);

  console.log(cartItems);
  return (
    <>
      {cartItems.length ? (
        <div>
          <h2>Cart Items</h2>
          {cartItems.map((product) => (
            <div key={product.id} className="card">
              <h3>{product.name}</h3>
              <img className="cardImg" src={product.image} />
              <p>{product.desc}</p>
              <small>{product.price}</small>
            </div>
          ))}
        </div>
      ) : (
        <div>
          <p>Cart is Empty</p>
          <Link to="/">Go back</Link>
        </div>
      )}
    </>
  );
}
