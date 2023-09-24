import React, { useState, useEffect } from "react";
import Navbar from "../components/navbar";
import Header from "../components/header";
import ProductForm from "../components/productForm";
import "../styles/createProduct.css";
import ProductTable from "../components/productTable";
import Button from "../components/button";
import Alert from "../components/alert";

const CreateProduct = () => {
  // State untuk bahasa dan alert selamat datang
  const [language, setLanguage] = useState("en");
  const [showWelcomeAlert, setShowWelcomeAlert] = useState(true);

  // Data artikel untuk judul dan deskripsi
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

  // State untuk data produ
  const emptyProduct = {
    productName: "",
    productCategory: "",
    productFreshness: "",
    productPrice: 0,
  };

  // State untuk input produk
  const [products, setProducts] = useState([]);
  const [productIdCounter, setProductIdCounter] = useState(1);
  const [editProductId, setEditProductId] = useState(null);
  const [productName, setProductName] = useState("");
  const [productCategory, setProductCategory] = useState("");
  const [productFreshness, setProductFreshness] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productNameError, setProductNameError] = useState("");
  const [isProductNameInvalid, setIsProductNameInvalid] = useState(false);

  // Event handler untuk perubahan bahasa
  const handleLanguageChange = () => {
    setLanguage(language === "en" ? "id" : "en");
  };

  // Event handler untuk menampilkan nomor acak
  const handleShowRandomNumber = () => {
    const randomNumber = Math.floor(Math.random() * 1000);
    console.log("Random Number:", randomNumber);
  };

  // Event handler untuk perubahan nama produk
  const handleProductNameChange = (e) => {
    let productName = e.target.value;
    let productNameLength = productName.length;
    let productNameSplit = productName.split(" ");

    if (productNameSplit.length > 1) {
      productNameLength -= productNameSplit.length - 1;
    }

    if (productNameLength > 25) {
      setIsProductNameInvalid(true);
      setProductNameError("Product Name must not exceed 25 characters");
    } else {
      setIsProductNameInvalid(false);
      setProductName(productName);
    }
  };

  // Event handler untuk perubahan kategori produk
  const handleProductCategoryChange = (e) => {
    let productCategory = e.target.value;
    setProductCategory(productCategory);
  };

  // Event handler untuk perubahan product freshness
  const handleProductFreshnessChange = (e) => {
    let productFreshness = e.target.value;
    setProductFreshness(productFreshness);
  };

  // Event handler untuk perubahan harga produk
  const handleProductPriceChange = (e) => {
    let productPrice = e.target.value;
    setProductPrice(productPrice);
  };

  // Event handler untuk menambahkan produk baru
  const handleSubmit = () => {
    if (productName === "") {
      alert("Please enter a valid product name.");
    } else {
      const newProduct = {
        id: productIdCounter,
        productName: productName,
        productCategory: productCategory,
        productFreshness: productFreshness,
        productPrice: productPrice,
      };

      setProducts([...products, newProduct]);
      setProductIdCounter(productIdCounter + 1);
      setProductName("");
      setProductCategory("");
      setProductFreshness("");
      setProductPrice("");
    }
  };

  // Event handler untuk menghapus produk
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

  // Event handler untuk mengedit produk
  const handleEdit = (productId) => {
    const productToEdit = products.find((product) => product.id === productId);
    if (productToEdit) {
      setProductName(productToEdit.productName);
      setProductCategory(productToEdit.productCategory);
      setProductFreshness(productToEdit.productFreshness);
      setProductPrice(productToEdit.productPrice);
      setEditProductId(productId);
    }
  };

  // Event handler untuk menyimpan perubahan edit produk
  const handleSaveEdit = () => {
    if (editProductId !== null) {
      const updatedProducts = products.map((product) => {
        if (product.id === editProductId) {
          return {
            ...product,
            productName: productName,
            productCategory: productCategory,
            productFreshness: productFreshness,
            productPrice: productPrice,
          };
        }
        return product;
      });

      setProducts(updatedProducts);
      setEditProductId(null);
      setProductName("");
      setProductCategory("");
      setProductFreshness("");
      setProductPrice("");
    }
  };

  // Menghilangkan alert selamat datang setelah 3 detik
  useEffect(() => {
    setTimeout(() => {
      setShowWelcomeAlert(false);
    }, 3000);
  }, []);

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
        onSubmit={handleSubmit}
        productName={productName}
        productFreshness={productFreshness}
        onProductNameChange={handleProductNameChange}
        onProductCategoryChange={handleProductCategoryChange}
        onProductFreshnessChange={handleProductFreshnessChange}
        onProductPrice={handleProductPriceChange}
        productNameError={productNameError}
        isProductNameError={isProductNameInvalid}
      />
      <ProductTable
        products={products}
        onDelete={handleDelete}
        onEdit={handleEdit}
      />
    </>
  );
};

export default CreateProduct;
