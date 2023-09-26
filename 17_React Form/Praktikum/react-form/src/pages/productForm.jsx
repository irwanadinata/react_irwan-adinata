import React from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const productSchema = z.object({
  productName: z.string().min(1).max(25).nonempty(),
  productCategory: z.string().nonempty(),
  productFreshness: z.string().nonempty(),
  productImage: z.string().refine((value) => {
    if (!value) {
      return true;
    }
    const allowedExtensions = ["jpg", "jpeg", "png"];
    const fileExtension = value.split(".").pop().toLowerCase();
    return allowedExtensions.includes(fileExtension);
  }, "Invalid image format. Only JPG and PNG are allowed."),
});

const ProductForm = ({ onSubmit }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(productSchema),
  });

  return (
    <>
      <form className="g-3" onSubmit={handleSubmit(onSubmit)}>
        <div className="col-md-5 mx-auto mt-3">
          <label htmlFor="validationDefault01" className="form-label">
            Product Name
          </label>
          <Controller
            name="productName"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <>
                <input
                  {...field}
                  type="text"
                  className={`form-control ${
                    errors.productName ? "is-invalid" : ""
                  }`}
                  id="validationDefault01"
                  required=""
                />
                {errors.productName && (
                  <div className="invalid-feedback">
                    {errors.productName.message || "Product Name is required"}
                  </div>
                )}
              </>
            )}
          />
        </div>
        <div className="col-md-5 mx-auto mt-3">
          <label htmlFor="validationDefault02" className="form-label">
            Product Category
          </label>
          <Controller
            name="productCategory"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <>
                <select
                  {...field}
                  className={`form-select ${
                    errors.productCategory ? "is-invalid" : ""
                  }`}
                  id="validationDefault02"
                  required=""
                >
                  <option>Choose...</option>
                  <option value="Tshirt">Tshirt</option>
                  <option value="Hat">Hat</option>
                  <option value="Shoes">Shoes</option>
                </select>
                {errors.productCategory && (
                  <div className="invalid-feedback">
                    {errors.productCategory.message || "Product Category is required"}
                  </div>
                )}
              </>
            )}
          />
        </div>
        <div className="col-md-5 mx-auto mt-3">
          <label htmlFor="validationDefault03" className="form-label">
            Image of Product
          </label>
          <Controller
            name="productImage"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <input
                {...field}
                type="file"
                className={`form-control ${
                  errors.productImage ? "is-invalid" : ""
                }`}
                id="validationDefault03"
                required=""
              />
            )}
          />
        </div>
        <div className="col-md-5 mx-auto mt-3">
          <label className="form-label">Product Freshness</label>
          <Controller
            name="productFreshness"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <div>
                <div className="form-check">
                  <input
                    {...field}
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                    value="Brand New"
                    required=""
                  />
                  <label className="form-check-label" htmlFor="flexRadioDefault1">
                    Brand New
                  </label>
                </div>
                <div className="form-check">
                  <input
                    {...field}
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault2"
                    value="Second Hand"
                  />
                  <label className="form-check-label" htmlFor="flexRadioDefault2">
                    Second Hand
                  </label>
                </div>
                <div className="form-check">
                  <input
                    {...field}
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault3"
                    value="Refurbished"
                  />
                  <label className="form-check-label" htmlFor="flexRadioDefault3">
                    Refurbished
                  </label>
                </div>
              </div>
            )}
          />
          {errors.productFreshness && (
            <div className="invalid-feedback">
              {errors.productFreshness.message || "Product Freshness is required"}
            </div>
          )}
        </div>
        <div className="col-md-5 mx-auto mt-3">
          <label htmlFor="validationDefault05" className="form-label">
            Additional Description
          </label>
          <Controller
            name="additionalDescription"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <textarea
                {...field}
                type="text"
                className={`form-control ${
                  errors.additionalDescription ? "is-invalid" : ""
                }`}
                id="validationDefault05"
                required=""
                rows={4}
              />
            )}
          />
          {errors.additionalDescription && (
            <div className="invalid-feedback">
              {errors.additionalDescription.message || "Additional Description is required"}
            </div>
          )}
        </div>
        <div className="col-md-5 mx-auto mt-3">
          <label htmlFor="validationDefault06" className="form-label">
            Product Price
          </label>
          <Controller
            name="productPrice"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <input
                {...field}
                type="number"
                className={`form-control ${
                  errors.productPrice ? "is-invalid" : ""
                }`}
                id="validationDefault06"
                required=""
              />
            )}
          />
          {errors.productPrice && (
            <div className="invalid-feedback">
              {errors.productPrice.message || "Product Price is required"}
            </div>
          )}
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