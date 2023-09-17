import React, { useState } from "react";

const ProductForm = ({
  onSubmit,
  onProductNameChange,
  onProductCategoryChange,
  productFreshness,
  onProductFreshnessChange,
  onProductPrice,
  productNameError,
  isProductNameError,
  product,
}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <>
      <form className="g-3" onSubmit={handleSubmit}>
        <div className="col-md-5 mx-auto mt-3">
          <label htmlFor="validationDefault01" className="form-label">
            Product Name
          </label>
          <input
            type="text"
            className={`form-control`}
            id="validationDefault01"
            required=""
            onChange={(e) => onProductNameChange(e)}
          />
          {isProductNameError && (
            <p className="text-danger">{productNameError}</p>
          )}
        </div>
        <div className="col-md-5 mx-auto mt-3">
          <label htmlFor="validationDefault02" className="form-label">
            Product Category
          </label>
          <select
            className="form-select"
            id="validationDefault02"
            required=""
            onChange={(e) => onProductCategoryChange(e)}
          >
            <option>Choose...</option>
            <option value="Tshirt">Tshirt</option>
            <option value="Hat">Hat</option>
            <option value="Shoes">Shoes</option>
          </select>
        </div>
        <div className="col-md-5 mx-auto mt-3">
          <label htmlFor="validationDefault03" className="form-label">
            Image of Product
          </label>
          <input
            type="file"
            className="form-control"
            id="validationDefault03"
            required=""
          />
        </div>
        <div className="col-md-5 mx-auto mt-3">
          <label className="form-label">Product Freshness</label>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault1"
              value={"Brand New"}
              checked={productFreshness === "Brand New"}
              required=""
              onChange={(e) => onProductFreshnessChange(e)}
            />
            <label className="form-check-label" htmlFor="flexRadioDefault1">
              Brand New
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault2"
              value={"Second Hand"}
              checked={productFreshness === "Second Hand"}
              onChange={(e) => onProductFreshnessChange(e)}
            />
            <label className="form-check-label" htmlFor="flexRadioDefault2">
              Second Hand
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault2"
              value={"Refurbished"}
              checked={productFreshness === "Refurbished"}
              onChange={(e) => onProductFreshnessChange(e)}
            />
            <label className="form-check-label" htmlFor="flexRadioDefault2">
              Refurbished
            </label>
          </div>
        </div>
        <div className="col-md-5 mx-auto mt-3">
          <label htmlFor="validationDefault05" className="form-label">
            Additional Description
          </label>
          <textarea
            type="text"
            className="form-control"
            id="validationDefault05"
            required=""
            rows={4}
            defaultValue={""}
          />
        </div>
        <div className="col-md-5 mx-auto mt-3">
          <label htmlFor="validationDefault06" className="form-label">
            Product Price
          </label>
          <input
            type="number"
            className="form-control"
            id="validationDefault06"
            required=""
            onChange={(e) => onProductPrice(e)}
          />
          <div id="productPriceError" className="invalid-feedback" />
        </div>
        <div className="col-12 d-flex justify-content-center mt-4 mb-4">
          <button className="btn btn-primary" type="submit">
            Submit
          </button>
        </div>
      </form>
    </>
  );
};

export default ProductForm;