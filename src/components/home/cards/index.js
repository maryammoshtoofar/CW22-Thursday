import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../redux/features/cart";
import { useNavigate } from "react-router-dom";

export default function Cards({ products }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddtoCart = useCallback((product) => {
    dispatch(addToCart(product));
    navigate("cart");
  }, []);
  
  return (
    <>
      {products.map((product) => (
        <div key={product.id} className="card">
          <h3>{product.name}</h3>
          <img className="cardImg" src={product.image} />
          <p>{product.desc}</p>
          <small>{product.price}</small>
          <button onClick={() => handleAddtoCart(product)}>Add to Cart</button>
        </div>
      ))}
    </>
  );
}
