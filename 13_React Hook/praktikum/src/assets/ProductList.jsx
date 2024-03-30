import React from "react";

export default function ProductList({
  productsList,
  editProduct,
  deleteProduct,
}) {
  return (
    <table className="product-table w-full mt-4">
      <thead>
        <tr className="bg-gray-600 text-white">
          <th className="border px-4 py-2">No</th>
          <th className="border px-4 py-2">Product Name</th>
          <th className="border px-4 py-2">Product Category</th>
          <th className="border px-4 py-2">Product Freshness</th>
          <th className="border px-4 py-2">Product Price</th>
          <th className="border px-4 py-2">Action</th>
        </tr>
      </thead>
      <tbody>
        {productsList.length === 0 ? (
          <tr>
            <td colSpan="6" className="border px-4 py-2 text-center">
              No products available
            </td>
          </tr>
        ) : (
          productsList.map((product, index) => (
            <tr key={product.id}>
              <td className="border px-4 py-2">{index + 1}</td>
              <td className="border px-4 py-2">{product.name}</td>
              <td className="border px-4 py-2">{product.category}</td>
              <td className="border px-4 py-2">{product.freshness}</td>
              <td className="border px-4 py-2">{product.price}</td>
              <td className="border px-4 py-2">
                <button
                  className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-2"
                  onClick={() => editProduct(product.id)}
                >
                  Edit
                </button>
                <button
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                  onClick={() => deleteProduct(product.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
}
