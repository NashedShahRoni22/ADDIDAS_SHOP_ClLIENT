import axios from "axios";
import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get("products.json")
      .then((res) => setProducts(res.data))
      .then((e) => console.log(e));
  }, []);
  return (
    <div className="container mx-auto my-10 py-10">
      <h1 className="text-3xl font-semibold">
        Checkout <span className="text-purple-500">{products.length}</span> Products
      </h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center my-10 py-10">
        {products?.map((pd) => (
          <ProductCard key={pd.id} pd={pd}></ProductCard>
        ))}
      </div>
    </div>
  );
};

export default Products;
