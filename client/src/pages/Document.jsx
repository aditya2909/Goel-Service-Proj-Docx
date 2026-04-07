import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../service/API";

const Document = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchDocuments = async () => {
      const { data } = await API.get("/document");
      setData(data.document);
    };
    fetchDocuments();
  }, []);

  const handleDelete = async (id) => {
    await API.delete(`/document/${id}`);
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center">
      {/* 80% width container */}
      <div className="w-[80%] py-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Documents</h1>
          <button
            onClick={() => navigate("/product")}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
          >
            + Add Product
          </button>

          <button
            onClick={() => navigate("/create")}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
          >
            + Add Record
          </button>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {data.map((item) => (
            <div
              key={item._id}
              className="bg-white rounded-xl shadow-md p-5 hover:shadow-xl transition"
            >
              <h2 className="text-lg font-semibold mb-2">
                Project Name: {item.projName}
              </h2>

              <p className="text-gray-600">Location: {item.projLocation}</p>

              <p className="text-gray-600">Client Name: {item.clientName}</p>
              <p className="text-gray-600">
                Product Name: {item.productName.prodName}kVA
              </p>
              <div className="flex items-center justify-between gap-2">
                <button
                  onClick={() => navigate(`/document/${item._id}`)}
                  className="mt-4 w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600"
                >
                  View Details
                </button>
                <button
                  onClick={() => handleDelete(item._id)}
                  className="mt-4 w-full bg-red-500 text-white py-2 rounded-lg hover:bg-green-600"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Document;
