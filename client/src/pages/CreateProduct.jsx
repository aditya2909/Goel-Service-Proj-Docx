import React, { useEffect, useState } from "react";
import API from "../service/API";

const CreateProduct = () => {
  const [products, setProducts] = useState([]);
  const [formData, setFormData] = useState({
    prodName: "",
  });
  const [showForm, setShowForm] = useState(false);

  const [editId, setEditId] = useState(null);

  // 🔹 Fetch products
  const fetchProducts = async () => {
    const res = await API.get("/product");
    setProducts(res.data.product);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // 🔹 Handle change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      prodName: e.target.value,
    });
  };

  // 🔹 Submit (Create / Update)
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (editId) {
        // UPDATE
        await API.put(`/product/${editId}`, formData);
      } else {
        // CREATE
        console.log(formData);
        await API.post("/product/create", formData);
      }

      setFormData({ prodName: "" });
      setEditId(null);
      setShowForm(false); // ✅ close form
      fetchProducts();
    } catch (error) {
      console.error(error);
    }
  };

  // 🔹 Edit
  const handleEdit = (product) => {
    setFormData({ prodName: product.prodName });
    setEditId(product._id);
    setShowForm(true); // ✅ open form
  };

  // 🔹 Delete
  const handleDelete = async (id) => {
    if (confirm("Are you sure?")) {
      await API.delete(`/product/${id}`);
      fetchProducts();
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center">
      <div className="w-[80%] py-6">
        {/* HEADER */}
        <div className="flex justify-between">
          <h1 className="text-2xl font-bold mb-6">Product Management</h1>
          <button
            onClick={() => {
              setFormData({ prodName: "" }); // ✅ clear form
              setEditId(null);
              setShowForm(true);
            }}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg mb-6 hover:bg-blue-600"
          >
            + Add Product
          </button>
        </div>

        {/* 🔥 FORM */}
        {showForm && (
          <form
            onSubmit={handleSubmit}
            className="bg-white p-6 rounded-xl shadow mb-6 flex gap-4 items-end"
          >
            <div className="flex flex-col w-full">
              <label className="text-sm mb-1">Product Name</label>
              <input
                type="text"
                value={formData.prodName}
                onChange={handleChange}
                className="border p-2 rounded-lg"
                required
              />
            </div>

            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
            >
              {editId ? "Update" : "Add"}
            </button>
            <button
              type="button"
              onClick={() => {
                setFormData({ prodName: "" });
                setEditId(null);
                setShowForm(false); // ✅ hide form
              }}
              className="bg-gray-400 text-white px-4 py-2 rounded-lg hover:bg-gray-500"
            >
              Cancel
            </button>
          </form>
        )}

        {/* 📊 TABLE */}
        <div className="bg-white rounded-xl shadow overflow-hidden">
          <table className="w-full text-left">
            <thead className="bg-gray-200">
              <tr>
                <th className="p-3">#</th>
                <th className="p-3">Product Name</th>
                <th className="p-3 text-center">Actions</th>
              </tr>
            </thead>

            <tbody>
              {products.length === 0 ? (
                <tr>
                  <td colSpan="3" className="text-center p-4">
                    No products found
                  </td>
                </tr>
              ) : (
                products.map((product, index) => (
                  <tr key={product._id} className="border-t">
                    <td className="p-3">{index + 1}</td>
                    <td className="p-3">{product.prodName}</td>

                    <td className="p-3 flex justify-center gap-2">
                      <button
                        onClick={() => handleEdit(product)}
                        className="bg-yellow-400 px-3 py-1 rounded-lg hover:bg-yellow-500"
                      >
                        Edit
                      </button>

                      <button
                        onClick={() => handleDelete(product._id)}
                        className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CreateProduct;
