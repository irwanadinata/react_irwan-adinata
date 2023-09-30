import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setProducts,
  editProduct,
  deleteProduct,
} from "@/utils/states/redux/reducers/reducer";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import * as z from "zod";
import { Input, RadioGroup, Select, TextArea } from "../components/input";
import Layout from "../components/layout";
import Button from "../components/button";
import Table from "../components/table";

const MAX_FILE_SIZE = 500000;
const ACCEPTED_IMAGE_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
];

const schema = z.object({
  id: z.string().optional(),
  productName: z
    .string()
    .min(1, { message: "Please enter a valid product name" })
    .max(25, { message: "Product name must not exceed 25 characters" })
    .refine(
      (value) => {
        return !/@|#|{}/.test(value);
      },
      { message: "Product name cannot contain @, #, or {}" }
    ),
  productCategory: z
    .string()
    .min(1, { message: "Please enter a valid product category" }),
  image: z
    .any()
    .refine(
      (files) => files?.[0]?.size <= MAX_FILE_SIZE,
      `Max image size is 5MB.`
    )
    .refine(
      (files) => ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type),
      "Only .jpg, .jpeg, .png and .webp formats are supported."
    ),
  productFreshness: z
    .string()
    .min(1, { message: "Please enter a valid product freshness" }),
  additionalDescription: z
    .string()
    .min(1, { message: "Please enter a valid additional description" }),
  productPrice: z
    .string()
    .min(1, { message: "Please enter a valid product price" }),
});

export default function CreateProduct() {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.data);
  const [selectedId, setSelectedId] = useState("");
  const [radioOption] = useState([
    {
      id: "freshness-new",
      label: "Brand New",
    },
    {
      id: "freshness-second",
      label: "Second Hand",
    },
    {
      id: "freshness-refurbished",
      label: "Refurbished",
    },
  ]);

  const {
    reset,
    setValue,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  // Fungsi submit pada redux
  function onSubmit(data) {
    const newData = { id: uuidv4(), ...data };
    const dupeArr = [...products, newData];
    dispatch(setProducts(dupeArr));
    reset();
  }

  // Fungsi edit pada redux
  function onSubmitEdit(data) {
    const newData = products.map((product) => {
      if (product.id === selectedId) {
        return { id: selectedId, ...data };
      }
      return product;
    });
    dispatch(editProduct({ id: selectedId, updatedProduct: newData }));
    setSelectedId("");
    reset();
  }

  function onClickEdit(data) {
    setSelectedId(data.id);
    setValue("productName", data.productName);
    setValue("productCategory", data.productCategory);
    setValue("image", data.image);
    setValue("productFreshness", data.productFreshness);
    setValue("additionalDescription", data.additionalDescription);
    setValue("productPrice", data.productPrice);
  }

  // Fungsi delete pada redux
  function onClickDelete(data) {
    const confirmDelete = window.confirm(
      "Apakah Anda yakin ingin menghapus produk ini?"
    );
    if (confirmDelete) {
      dispatch(deleteProduct(data.id));
    }
  }

  return (
    <Layout>
      <form
        onSubmit={handleSubmit(selectedId == "" ? onSubmit : onSubmitEdit)}
        aria-label="product-form"
      >
        <Input
          id="input-product-name"
          aria-label="input-product-name"
          label="Product Name"
          name="productName"
          register={register}
          error={errors.productName?.message}
        />
        <Select
          id="input-product-category"
          aria-label="input-product-category"
          label="Product Category"
          name="productCategory"
          options={["Tshirt", "Hat", "Shoes"]}
          placeholder="Choose..."
          register={register}
          error={errors.productCategory?.message}
        />
        <Input
          id="input-product-image"
          aria-label="input-product-image"
          label="Image of Product"
          name="image"
          type="file"
          register={register}
          error={errors.image?.message}
        />
        <RadioGroup
          id="input-product-freshness"
          aria-label="input-product-freshness"
          label="Product Freshness"
          name="productFreshness"
          options={radioOption}
          register={register}
          error={errors.productFreshness?.message}
        />
        <TextArea
          id="input-product-description"
          aria-label="input-product-description"
          label="Additional Description"
          role="input"
          name="additionalDescription"
          register={register}
          error={errors.additionalDescription?.message}
        />
        <Input
          id="input-product-price"
          aria-label="input-product-price"
          label="Product Price"
          name="productPrice"
          type="number"
          register={register}
          error={errors.productPrice?.message}
        />
        <Button
          id="btn-submit"
          aria-label="btn-submit"
          label="Submit"
          type="submit"
        />
      </form>
      <Table
        datas={products}
        isReady={true}
        headers={[
          "No",
          "Product Name",
          "Product Category",
          "Image of Product",
          "Product Freshness",
          "Additional Description",
          "Product Price",
        ]}
        onEditClick={(data) => onClickEdit(data)}
        onDeleteClick={(data) => onClickDelete(data)}
      />
    </Layout>
  );
}
