import React, { useEffect } from "react";
import Cards from "../../components/home/cards";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../../redux/features/product";

export default function Home() {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <div className="cardContainer">
      <Cards products={products} />
    </div>
  );
}
