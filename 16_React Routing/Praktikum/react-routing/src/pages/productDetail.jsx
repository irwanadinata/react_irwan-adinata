import React from "react";

const ProductDetail = ({ product }) => {
  if (!product) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <h2>Detail :</h2>
      <p>Nama Produk: {product.productName}</p>
      <p>Kategori Produk: {product.productCategory}</p>
      <p>Freshness Produk: {product.productFreshness}</p>
      <p>Harga Produk: {product.productPrice}</p>
    </div>
  );
};

export default ProductDetail;