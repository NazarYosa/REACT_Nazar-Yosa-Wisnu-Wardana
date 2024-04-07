import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import FetchData from "../FetchData.js";
import { supabase } from "../Connection.js";

export default function CreateProduct() {
  const history = useNavigate();
  const [products, setProducts] = useState([]);
  const [editingProductId, setEditingProductId] = useState(null);
  const [input, setInput] = useState({
    name: "",
    category: "",
    freshness: "",
    price: "",
  });

  // function action(productId) {
  //   history({
  //     pathname: `/create-product/${productId}`,
  //     state: {
  //       data: fetchDataFromAPI(),
  //     },
  //   });
  // }

  function action(productId) {
    history({
      pathname: `/create-product/${productId}`,
    });
  }

  async function fetchDataFromAPI() {
    const productsData = await FetchData();
    setProducts(productsData);
  }

  useEffect(() => {
    fetchDataFromAPI();
  }, []);

  async function addProduct() {
    if (editingProductId) {
      // Jika sedang dalam mode edit, perbarui produk yang ada
      await supabase
        .from("products")
        .update({
          productName: input.name,
          productCategory: input.category,
          productFreshness: input.freshness,
          productPrice: input.price,
        })
        .eq("id_product", editingProductId);
      setEditingProductId(null);
    } else {
      // Jika tidak dalam mode edit, tambahkan produk baru
      await supabase.from("products").insert({
        productName: input.name,
        productCategory: input.category,
        productFreshness: input.freshness,
        productPrice: input.price,
      });
    }
    fetchDataFromAPI();
    setInput({
      name: "",
      category: "",
      freshness: "",
      price: "",
    });
  }

  function editProduct(productId) {
    // Temukan produk yang akan diedit berdasarkan ID
    const productToEdit = products.find(
      (product) => product.id_product === productId
    );
    // Set nilai input form dengan data produk yang akan diedit
    setInput({
      name: productToEdit.productName,
      category: productToEdit.productCategory,
      freshness: productToEdit.productFreshness,
      price: productToEdit.productPrice,
    });
    // Set ID produk yang sedang diedit
    setEditingProductId(productId);
  }

  async function deleteProduct(productId) {
    // Tampilkan SweetAlert konfirmasi sebelum menghapus produk
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    });

    if (result.isConfirmed) {
      // Hapus produk jika pengguna mengonfirmasi
      const { data, error } = await supabase
        .from("products")
        .delete()
        .eq("id_product", productId);
      fetchDataFromAPI();

      if (error) {
        console.error(error);
      }

      if (data) {
        console.log(data);
      }

      // Tampilkan SweetAlert bahwa produk berhasil dihapus
      Swal.fire("Deleted!", "Your product has been deleted.", "success");
    }
  }

  function handleChange(e) {
    setInput((inputs) => {
      return {
        ...inputs,
        [e.target.name]: e.target.value,
      };
    });
  }

  return (
    <>
      <form
        className="flex flex-col items-center mt-[5%]"
        onSubmit={addProduct}
      >
        <div className="mb-4 flex items-center">
          <div className="flex flex-col">
            <label htmlFor="productName" className="mb-1 mr-2">
              Product Name:
            </label>
            <input
              type="text"
              name="name"
              className="border rounded px-3 py-2 w-96"
              required
              value={input.name}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="mb-4 flex items-center">
          <div className="flex flex-col">
            <label htmlFor="productCategory" className="mb-1 mr-2">
              Product Category:
            </label>
            <select
              name="category"
              className="border rounded px-3 py-2 w-96"
              required
              value={input.category}
              onChange={handleChange}
            >
              <option selected></option>
              <option value="Handphone">Handphone</option>
              <option value="Laptop">Laptop</option>
              <option value="Mouse">Mouse</option>
              <option value="Monitor">Monitor</option>
            </select>
          </div>
        </div>
        <div className="mb-4 flex items-center">
          <div className="flex flex-col">
            <label htmlFor="productFreshness" className="mb-1 mr-2">
              Product Freshness:
              <span className="text-red-500">*new or second</span>
            </label>
            <input
              type="text"
              name="freshness"
              className="border rounded px-3 py-2 w-96"
              required
              value={input.freshness}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="mb-4 flex items-center">
          <div className="flex flex-col">
            <label htmlFor="productPrice" className="mb-1 mr-2">
              Product Price:
            </label>
            <input
              type="number"
              name="price"
              className="border rounded px-3 py-2 w-96"
              required
              value={input.price}
              onChange={handleChange}
            />
          </div>
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          {editingProductId ? "Update Product" : "Add Product"}
        </button>
      </form>

      <table className="container mx-auto product-table w-full mt-4">
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
          {products.length === 0 ? (
            <tr>
              <td className="border px-4 py-2 text-center" colSpan="6">
                No data
              </td>
            </tr>
          ) : (
            products.map((product, index) => (
              <tr key={product.id_product} className="text-center">
                <td className="border px-4 py-2">{index + 1}</td>
                <td className="border px-4 py-2">{product.productName}</td>
                <td className="border px-4 py-2">{product.productCategory}</td>
                <td className="border px-4 py-2">{product.productFreshness}</td>
                <td className="border px-4 py-2">Rp. {product.productPrice}</td>
                <td className="border px-4 py-2">
                  <button
                    className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-2"
                    onClick={() => editProduct(product.id_product)}
                  >
                    Edit
                  </button>
                  <button
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mr-2"
                    onClick={() => deleteProduct(product.id_product)}
                  >
                    Delete
                  </button>
                  <button
                    onClick={() => action(product.id)}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  >
                    Detail
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </>
  );
}
