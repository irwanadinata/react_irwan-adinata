import React, { useState, useEffect } from "react";
import Header from "../components/header";
import ProductForm from "./productForm";
import "../styles/createProduct.css";
import ProductTable from "../components/productTable";
import Button from "../components/button";
import Alert from "../components/alert";
import Navbar from "../components/navbar";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { object, string, number } from "zod";

const schema = object({
  productName: string().max(25, "Product Name must not exceed 25 characters"),
  productCategory: string(),
  productFreshness: string(),
  productPrice: string().refine((value) => {
    const parsedValue = parseFloat(value);
    return !isNaN(parsedValue) && parsedValue >= 0;
  }, "Product Price must be a valid number and non-negative"),
});

const CreateProduct = () => {
  const [language, setLanguage] = useState("en");
  const [showWelcomeAlert, setShowWelcomeAlert] = useState(true);

  const article = {
    title: {
      id: "Buat Akun",
      en: "Create Account",
    },
    description: {
      id:
        "Di bawah ini adalah contoh formulir yang dibuat seluruhnya dengan kontrol formulir Bootstrap. Setiap grup formulir yang diperlukan memiliki status validasi yang dapat dipicu dengan mencoba mengirimkan formulir tanpa menyelesaikannya.",
      en:
        "Below is an example form built entirely with Bootstrap’s form controls. Each required form group has a validation state that can be triggered by attempting to submit the form without completing it.",
    },
  };

  const [products, setProducts] = useState([]);
  const [productIdCounter, setProductIdCounter] = useState(1);
  const [editProductId, setEditProductId] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const handleLanguageChange = () => {
    setLanguage(language === "en" ? "id" : "en");
  };

  const handleShowRandomNumber = () => {
    const randomNumber = Math.floor(Math.random() * 1000);
    console.log("Random Number:", randomNumber);
  };

  const onSubmit = (data) => {
    const newProduct = {
      id: productIdCounter,
      ...data,
      productPrice: parseFloat(data.productPrice),
      productImage: selectedImage,
    };

    setProducts([...products, newProduct]);
    setProductIdCounter(productIdCounter + 1);
    reset();
    setSelectedImage(null);
  };

  const handleDelete = (productId) => {
    const confirmDelete = window.confirm(
      "Apakah Anda yakin ingin menghapus produk ini?"
    );
    if (confirmDelete) {
      const updatedProducts = products.filter(
        (product) => product.id !== productId
      );
      setProducts(updatedProducts);
    }
  };

  const handleEdit = (productId) => {
    const productToEdit = products.find((product) => product.id === productId);
    if (productToEdit) {
      setEditProductId(productId);
      reset({
        productName: productToEdit.productName,
        productCategory: productToEdit.productCategory,
        productFreshness: productToEdit.productFreshness,
        productPrice: productToEdit.productPrice.toString(),
      });
    }
  };

  const handleSaveEdit = () => {
    if (editProductId !== null) {
      const updatedProducts = products.map((product) => {
        if (product.id === editProductId) {
          return {
            ...product,
            ...control.getValues(),
            productPrice: parseFloat(control.getValues().productPrice),
            productImage: selectedImage,
          };
        }
        return product;
      });

      setProducts(updatedProducts);
      setEditProductId(null);
      reset();
      setSelectedImage(null);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setShowWelcomeAlert(false);
    }, 3000);
  }, []);

  const handleImageChange = (e) => {
    setSelectedImage(e.target.files[0]);
  };

  return (
    <>
      <Navbar />
      <Alert showAlert={showWelcomeAlert} message="Welcome" />
      <Header
        title={article.title}
        description={article.description}
        language={language}
        onLanguageChange={handleLanguageChange}
      />
      <Button onClick={handleShowRandomNumber} label="Random Button" />
      <ProductForm
        onSubmit={onSubmit}
        control={control}
        errors={errors}
        selectedImage={selectedImage}
        onImageChange={handleImageChange}
      />
      <ProductTable
        products={products}
        onDelete={handleDelete}
        onEdit={handleEdit}
        onSaveEdit={handleSaveEdit}
        editProductId={editProductId}
      />
    </>
  );
};

export default CreateProduct;