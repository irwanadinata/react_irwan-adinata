import React, { useState } from "react";
import Navbar from "../components/navbar";
import Header from "../components/header";
import ProductForm from "../components/productForm";
import "../styles/App.css";
import RandomNumberButton from "../components/randomNumberButton";

const CreateProduct = () => {
  // State untuk bahasa
  const [language, setLanguage] = useState("en");

  // Data artikel
  const article = {
    title: {
      id: "Buat Akun",
      en: "Create Account",
    },
    description: {
      id: "Di bawah ini adalah contoh formulir yang dibuat seluruhnya dengan kontrol formulir Bootstrap. Setiap grup formulir yang diperlukan memiliki status validasi yang dapat dipicu dengan mencoba mengirimkan formulir tanpa menyelesaikannya.",
      en: "Below is an example form built entirely with Bootstrap’s form controls. Each required form group has a validation state that can be triggered by attempting to submit the form without completing it.",
    },
  };

  const emptyroduct = {
    productName: "",
    productCategory: "",
    productFreshness: "",
    productPrice: 0,
  };

  // State dan fungsi untuk validasi
  let [product, setproduct] = useState(emptyroduct);
  const [productName, setProductName] = useState("");
  const [productCategory, setProductCategory] = useState("");
  const [productFreshness, setProductFreshness] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productNameError, setProductNameError] = useState("");
  const [isProductNameInvalid, setisProductNameInvalid] = useState(false);

  // Event handler untuk tombol "Change Language"
  const handleLanguageChange = () => {
    setLanguage(language === "en" ? "id" : "en");
  };

  // Event handler untuk random number
  const handleShowRandomNumber = () => {
    const randomNumber = Math.floor(Math.random() * 1000);
    console.log("Random Number:", randomNumber);
  };

  // Event handler untuk product name
  const handleProductName = (e) => {
    let productName = e.target.value;
    let productNameLength = productName.length;
    let productNameSplit = productName.split(" ");

    if (productNameSplit.length > 1) {
      productNameLength -= productNameSplit.length - 1;
    }

    if (productNameLength > 25) {
      setisProductNameInvalid(true);
      setProductNameError("Last Name must not exceed 25 characters");
    } else {
      setisProductNameInvalid(false);
      setProductName(productName);
    }
  };

  // event handler untuk product category
  const handleProductCategory = (e) => {
    let productCategory = e.target.value;
    setProductCategory(productCategory);
  };

  // event handler untuk product freshness
  const handleproductFreshness = (e) => {
    let productFreshness = e.target.value;
    setProductFreshness(productFreshness);
  };

  // Event handler untuk product price
  const handleProductPrice = (e) => {
    let productPrice = e.target.value;
    setProductPrice(productPrice);
  };

  // Event handler untuk tombol "Submit"
  const handleSubmit = () => {
    if (productName == "") {
      alert("Please enter a valid product name.");
    }
    let product = { ...emptyroduct };
    product["productCategory"] = productCategory;
    product["productFreshness"] = productFreshness;
    product["productName"] = productName;
    product["productPrice"] = productPrice;

    setproduct(product);
  };

  return (
    <>
      <Navbar />
      <Header
        title={article.title}
        description={article.description}
        language={language}
        onLanguageChange={handleLanguageChange}
      />
      <RandomNumberButton onClick={handleShowRandomNumber} />
      <ProductForm
        onSubmit={handleSubmit}
        productName={productName}
        productFreshness={productFreshness}
        onProductNameChange={handleProductName}
        onProductCategoryChange={handleProductCategory}
        onProductFreshnessChange={handleproductFreshness}
        onProductPrice={handleProductPrice}
        productNameError={productNameError}
        isProductNameError={isProductNameInvalid}
        product={product}
      />
    </>
  );
};

export default CreateProduct;