import React from "react";
import { useProductLogic } from "./ProductLogic";
import ProductForm from "./ProductForm";
import ProductList from "./ProductList";

export default function CreateProduct() {
  const {
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
  } = useProductLogic();

  return (
    <div className="container mx-auto mt-8">
      <ProductForm
        productNameInput={productNameInput}
        setProductNameInput={setProductNameInput}
        productCategoryInput={productCategoryInput}
        setProductCategoryInput={setProductCategoryInput}
        productFreshnessInput={productFreshnessInput}
        setProductFreshnessInput={setProductFreshnessInput}
        productPriceInput={productPriceInput}
        setProductPriceInput={setProductPriceInput}
        addOrUpdateProduct={addOrUpdateProduct}
        editProductId={editProductId}
      />
      <ProductList
        productsList={productsList}
        editProduct={editProduct}
        deleteProduct={deleteProduct}
      />
    </div>
  );
}
