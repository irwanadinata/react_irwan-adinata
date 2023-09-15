import React from "react";
import logoBootstrap from "../assets/images/bootstrap-logo.png";

function Content() {
  return (
    <>
      <div className="col-md-12 mx-auto text-center mt-5">
        <img src={logoBootstrap} alt="Logo Bootstrap" className="mt-3 mb-3" />
        <h3>Create Product</h3>
        <p className="col-md-6 mx-auto">
          Below is an example form built entirely with Bootstrap’s form
          controls. Each required form group has a validation state that can be
          triggered by attempting to submit the form without completing it
        </p>
      </div>
      <div className=" col-md-5 mx-auto mt-5">
        <h4>Detail Product</h4>
      </div>
      <form className="g-3" action="#">
        <div className="col-md-5 mx-auto mt-3">
          <label htmlFor="validationDefault01" className="form-label">
            Product Name
          </label>
          <input
            type="text"
            className="form-control"
            id="validationDefault01"
            required=""
          />
          <div id="productNameError" className="invalid-feedback" />
        </div>
        <div className="col-md-5 mx-auto mt-3">
          <label htmlFor="validationDefault02" className="form-label">
            Product Category
          </label>
          <select className="form-select" id="validationDefault02" required="">
            <option value="" disabled="">
              Choose...
            </option>
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
          <label htmlFor="validationDefault04" className="form-label">
            Product Freshness
          </label>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault1"
              required=""
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
}

export default Content;
