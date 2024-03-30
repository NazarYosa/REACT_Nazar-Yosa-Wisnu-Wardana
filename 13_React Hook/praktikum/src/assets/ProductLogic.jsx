import { useState, useEffect } from "react";
import Swal from "sweetalert2";

export function useProductLogic() {
  const [productsList, setProductsList] = useState([]);
  const [productNameInput, setProductNameInput] = useState("");
  const [productCategoryInput, setProductCategoryInput] = useState("");
  const [productFreshnessInput, setProductFreshnessInput] = useState("");
  const [productPriceInput, setProductPriceInput] = useState("");
  const [editProductId, setEditProductId] = useState(null);

  const generateUniqueId = () => {
    return new Date().getTime().toString();
  };

  const addOrUpdateProduct = () => {
    if (
      !productNameInput ||
      !productCategoryInput ||
      !productFreshnessInput ||
      !productPriceInput
    ) {
      showAlert("error", "Please fill in all fields.");
      return;
    }

    if (editProductId) {
      const updatedProductsList = productsList.map((product) => {
        if (product.id === editProductId) {
          return {
            ...product,
            name: productNameInput,
            category: productCategoryInput,
            freshness: productFreshnessInput,
            price: productPriceInput,
          };
        }
        return product;
      });
      setProductsList(updatedProductsList);
      setEditProductId(null);
      showAlert("success", "Product updated successfully!");
    } else {
      const newProduct = {
        id: generateUniqueId(),
        name: productNameInput,
        category: productCategoryInput,
        freshness: productFreshnessInput,
        price: productPriceInput,
      };
      setProductsList([...productsList, newProduct]);
      showAlert("success", "Product added successfully!");
    }

    clearInputFields();
  };

  const editProduct = (id) => {
    const productToEdit = productsList.find((product) => product.id === id);
    if (productToEdit) {
      setProductNameInput(productToEdit.name);
      setProductCategoryInput(productToEdit.category);
      setProductFreshnessInput(productToEdit.freshness);
      setProductPriceInput(productToEdit.price);
      setEditProductId(id);
    }
  };

  const deleteProduct = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        const updatedProductsList = productsList.filter(
          (product) => product.id !== id
        );
        setProductsList(updatedProductsList);
        if (editProductId === id) {
          setEditProductId(null);
          clearInputFields();
        }
        showAlert("success", "Product deleted successfully!");
      }
    });
  };

  const clearInputFields = () => {
    setProductNameInput("");
    setProductCategoryInput("");
    setProductFreshnessInput("");
    setProductPriceInput("");
  };

  const showAlert = (icon, message) => {
    Swal.fire({
      icon: icon,
      text: message,
      timer: 1500,
      timerProgressBar: true,
      showConfirmButton: false,
    });
  };

  useEffect(() => {
    showAlert("info", "Welcome to the product management system!");
  }, []);

  return {
    productsList,
    productNameInput,
    productCategoryInput,
    productFreshnessInput,
    productPriceInput,
    editProductId,
    setProductNameInput,
    setProductCategoryInput,
    setProductFreshnessInput,
    setProductPriceInput,
    addOrUpdateProduct,
    editProduct,
    deleteProduct,
  };
}
