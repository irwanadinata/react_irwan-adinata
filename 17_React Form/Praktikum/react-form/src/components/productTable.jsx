import React from "react";

const ProductTable = ({
  products,
  onDelete,
  onEdit,
  onSaveEdit,
  editProductId,
}) => {
  return (
    <div className="container mt-5">
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Product Name</th>
            <th>Product Category</th>
            <th>Product Freshness</th>
            <th>Product Price</th>
            <th>Product Image</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.productName}</td>
              <td>{product.productCategory}</td>
              <td>{product.productFreshness}</td>
              <td>${product.productPrice}</td>
              <td>
                {product.productImage && (
                  <img
                    src={URL.createObjectURL(product.productImage)}
                    alt={`Product ${product.id}`}
                    style={{ maxWidth: "100px", maxHeight: "100px" }}
                  />
                )}
              </td>
              <td>
                <button
                  className="btn btn-warning btn-sm mx-1"
                  onClick={() => onEdit(product.id)}
                  disabled={editProductId !== null}
                >
                  Edit
                </button>
                <button
                  className="btn btn-danger btn-sm mx-1"
                  onClick={() => onDelete(product.id)}
                >
                  Delete
                </button>
                {editProductId === product.id && (
                  <button
                    className="btn btn-success btn-sm mx-1"
                    onClick={() => onSaveEdit(product.id)}
                  >
                    Save
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;
