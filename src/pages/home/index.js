import React, { useEffect } from "react";
import Card from "../../components/card";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../../redux/features/product";

export default function Home() {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);
  console.log(products);

  useEffect(() => {
    dispatch(fetchProducts());
  });

  return <div>home</div>;
}
