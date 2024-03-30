import React from "react";

export default function ProductForm({
  productNameInput,
  setProductNameInput,
  productCategoryInput,
  setProductCategoryInput,
  productFreshnessInput,
  setProductFreshnessInput,
  productPriceInput,
  setProductPriceInput,
  addOrUpdateProduct,
  editProductId,
}) {
  return (
    <div>
      <div className="mb-4 flex items-center">
        <div className="flex flex-col">
          <label htmlFor="productName" className="mb-1 mr-2">
            Product Name:
          </label>
          <input
            type="text"
            id="productName"
            value={productNameInput}
            onChange={(e) => setProductNameInput(e.target.value)}
            className="border rounded px-3 py-2 w-96"
          />
        </div>
      </div>
      <div className="mb-4 flex items-center">
        <div className="flex flex-col">
          <label htmlFor="productCategory" className="mb-1 mr-2">
            Product Category:
          </label>
          <select
            id="productCategory"
            value={productCategoryInput}
            onChange={(e) => setProductCategoryInput(e.target.value)}
            className="border rounded px-3 py-2 w-96"
          >
            <option value="">Select Category</option>
            <option value="Electronics">Electronics</option>
            <option value="Clothing">Clothing</option>
            <option value="Food">Food</option>
            <option value="Books">Books</option>
          </select>
        </div>
      </div>
      <div className="mb-4 flex items-center">
        <div className="flex flex-col">
          <label htmlFor="productFreshness" className="mb-1 mr-2">
            Product Freshness:
          </label>
          <input
            type="text"
            id="productFreshness"
            value={productFreshnessInput}
            onChange={(e) => setProductFreshnessInput(e.target.value)}
            className="border rounded px-3 py-2 w-96"
          />
        </div>
      </div>
      <div className="mb-4 flex items-center">
        <div className="flex flex-col">
          <label htmlFor="productPrice" className="mb-1 mr-2">
            Product Price:
          </label>
          <input
            type="text"
            id="productPrice"
            value={productPriceInput}
            onChange={(e) => setProductPriceInput(e.target.value)}
            className="border rounded px-3 py-2 w-96"
          />
        </div>
      </div>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={addOrUpdateProduct}
      >
        {editProductId ? "Update Product" : "Add Product"}
      </button>
    </div>
  );
}
