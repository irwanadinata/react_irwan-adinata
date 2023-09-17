import React, { useState } from 'react';

const ProductTable = ({ products, onDelete, onEdit }) => {
  const [editMode, setEditMode] = useState(null);
  const [editedProduct, setEditedProduct] = useState({});

  const handleEdit = (id) => {
    setEditMode(id);
    const productToEdit = products.find((product) => product.id === id);
    setEditedProduct(productToEdit);
  };

  const handleSave = () => {
    onEdit(editedProduct);
    setEditMode(null);
    setEditedProduct({});
  };

  return (
    <div className="col-md-12 mx-auto mt-5">
      <table className="table" border={2}>
        <thead>
          <tr>
            <th>No</th>
            <th>Product Name</th>
            <th>Product Category</th>
            <th>Product Freshness</th>
            <th>Product Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={product.id}>
              <td>{index + 1}</td>
              <td>
                {editMode === product.id ? (
                  <input
                    type="text"
                    value={editedProduct.productName}
                    onChange={(e) =>
                      setEditedProduct({
                        ...editedProduct,
                        productName: e.target.value,
                      })
                    }
                  />
                ) : (
                  product.productName
                )}
              </td>
              <td>
                {editMode === product.id ? (
                  <input
                    type="text"
                    value={editedProduct.productCategory}
                    onChange={(e) =>
                      setEditedProduct({
                        ...editedProduct,
                        productCategory: e.target.value,
                      })
                    }
                  />
                ) : (
                  product.productCategory
                )}
              </td>
              <td>
                {editMode === product.id ? (
                  <input
                    type="text"
                    value={editedProduct.productFreshness}
                    onChange={(e) =>
                      setEditedProduct({
                        ...editedProduct,
                        productFreshness: e.target.value,
                      })
                    }
                  />
                ) : (
                  product.productFreshness
                )}
              </td>
              <td>
                {editMode === product.id ? (
                  <input
                    type="text"
                    value={editedProduct.productPrice}
                    onChange={(e) =>
                      setEditedProduct({
                        ...editedProduct,
                        productPrice: e.target.value,
                      })
                    }
                  />
                ) : (
                  product.productPrice
                )}
              </td>
              <td>
                {editMode === product.id ? (
                  <button className='btn btn-primary btn-sm' onClick={handleSave}>Save</button>
                ) : (
                  <>
                    <button className='btn btn-warning btn-sm' onClick={() => handleEdit(product.id)}>Edit</button>
                    <button className='btn btn-danger btn-sm' onClick={() => onDelete(product.id)}>Delete</button>
                  </>
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