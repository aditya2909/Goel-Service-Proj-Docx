import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../service/API";
import { generateDocument } from "../utils/generateDoc";
import Handover from "../assets/template/Handover";
import Scope from "../assets/template/Scope";
import Warranty from "../assets/template/Warranty";
import Work from "../assets/template/Work";
import { generateExcelDirect } from "../utils/generateExcel";

const ViewDocument = () => {
  const { id } = useParams();

  const [formData, setFormData] = useState({});
  const [products, setProducts] = useState([]);
  const [selectedTemplate, setSelectedTemplate] = useState("handover");
  const [isEditing, setIsEditing] = useState(false);

  const toInputDate = (date) => date?.split("T")[0] || "";

  // 🔹 Fetch document + products
  useEffect(() => {
    const fetchData = async () => {
      const docRes = await API.get(`/document/${id}`);
      const prodRes = await API.get("/product");

      const doc = docRes.data.document;

      setFormData({
        ...doc,
        orderDate: toInputDate(doc.orderDate),
        dateOfSubstantial: toInputDate(doc.dateOfSubstantial),
        warrantyStartDate: toInputDate(doc.warrantyStartDate),
        warrantyEndDate: toInputDate(doc.warrantyEndDate),
        productName: doc.productName?._id || "",
      });

      setProducts(prodRes.data.product);
    };

    fetchData();
  }, [id]);

  // 🔹 Handle change (same as your CreateDocument) :contentReference[oaicite:0]{index=0}
  const handleChange = (e) => {
    const { name, value } = e.target;

    let updatedData = {
      ...formData,
      [name]: value,
    };

    if (name === "warrantyStartDate" && value) {
      const date = new Date(value);
      date.setFullYear(date.getFullYear() + 2);
      date.setDate(date.getDate() - 1);

      updatedData.warrantyEndDate = date.toISOString().split("T")[0];
    }

    setFormData(updatedData);
  };

  // 🔹 Get selected product name
  const selectedProduct = products.find((p) => p._id === formData.productName);

  const renderTemplate = () => {
    switch (selectedTemplate) {
      case "handover":
        return <Handover data={formData} product={selectedProduct} />;
      case "scope-performance":
        return <Scope data={formData} product={selectedProduct} />;
      case "warranty":
        return <Warranty data={formData} product={selectedProduct} />;
      case "work":
        return <Work data={formData} product={selectedProduct} />;
      case "dos-donts":
        return <Work data={formData} product={selectedProduct} />;
      default:
        return null;
    }
  };

  const handleSubmit = async () => {};

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="flex gap-6">
        {/* LEFT SIDE - FORM */}
        <div className="w-1/2 bg-white p-6 rounded-xl shadow overflow-auto h-[90vh]">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">Document Details</h2>

            {!isEditing && (
              <button
                onClick={() => setIsEditing(true)}
                className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600"
              >
                Edit
              </button>
            )}
          </div>

          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-2xl shadow-md p-6 grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            <input
              type="text"
              name="projName"
              value={formData.projName || ""}
              onChange={handleChange}
              placeholder="Project Name *"
              className="border p-2 rounded-lg"
              disabled={!isEditing}
            />

            <input
              type="text"
              name="projLocation"
              value={formData.projLocation || ""}
              onChange={handleChange}
              placeholder="Project Location *"
              className="border p-2 rounded-lg"
              disabled={!isEditing}
            />

            <input
              type="text"
              name="clientName"
              value={formData.clientName || ""}
              onChange={handleChange}
              placeholder="Client Name"
              className="border p-2 rounded-lg"
              disabled={!isEditing}
            />

            <input
              type="text"
              name="clientLocation"
              value={formData.clientLocation || ""}
              onChange={handleChange}
              placeholder="Client Location"
              className="border p-2 rounded-lg"
              disabled={!isEditing}
            />

            <select
              name="productName"
              value={formData.productName || ""}
              onChange={handleChange}
              className="border p-2 rounded-lg"
              disabled={!isEditing}
            >
              <option value="">Select Product</option>
              {products.map((p) => (
                <option key={p._id} value={p._id}>
                  {p.prodName}
                </option>
              ))}
            </select>

            <input
              type="date"
              name="orderDate"
              value={formData.orderDate || ""}
              onChange={handleChange}
              className="border p-2 rounded-lg"
              disabled={!isEditing}
            />

            <input
              type="text"
              name="engineNo"
              value={formData.engineNo || ""}
              onChange={handleChange}
              placeholder="Engine No"
              className="border p-2 rounded-lg"
              disabled={!isEditing}
            />

            <input
              type="text"
              name="alternatorNo"
              value={formData.alternatorNo || ""}
              onChange={handleChange}
              placeholder="Alternator No"
              className="border p-2 rounded-lg"
              disabled={!isEditing}
            />

            <input
              type="text"
              name="orderNo"
              value={formData.orderNo || ""}
              onChange={handleChange}
              placeholder="Order No"
              className="border p-2 rounded-lg"
              disabled={!isEditing}
            />

            <input
              type="date"
              name="dateOfSubstantial"
              value={formData.dateOfSubstantial || ""}
              onChange={handleChange}
              className="border p-2 rounded-lg"
              disabled={!isEditing}
            />

            <input
              type="date"
              name="warrantyStartDate"
              value={formData.warrantyStartDate || ""}
              onChange={handleChange}
              className="border p-2 rounded-lg"
              disabled={!isEditing}
            />

            <input
              type="date"
              name="warrantyEndDate"
              value={formData.warrantyEndDate || ""}
              readOnly
              className="border p-2 rounded-lg bg-gray-100"
            />

            {/* 🔥 Buttons only in edit mode */}
            {isEditing && (
              <div className="col-span-1 md:col-span-2 flex justify-end gap-4 mt-4">
                <button
                  type="button"
                  onClick={() => {
                    setIsEditing(false);
                    // optionally reload original data
                  }}
                  className="px-4 py-2 rounded-lg border hover:bg-gray-100"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="px-4 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600"
                >
                  Save Changes
                </button>
              </div>
            )}
          </form>
        </div>

        {/* RIGHT SIDE - LIVE DOCUMENT */}
        <div className="w-1/2 bg-white p-6 rounded-xl shadow h-[90vh] overflow-auto">
          <div>
            <div className="flex justify-between gap-3 mb-4">
              {[
                "handover",
                "work",
                "scope-performance",
                "warranty",
                "dos-donts",
              ].map((t) => (
                <button
                  key={t}
                  onClick={() => setSelectedTemplate(t)}
                  className={`px-4 flex-1 py-2 rounded-lg cursor-pointer ${
                    selectedTemplate === t
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200"
                  }`}
                >
                  {t.charAt(0).toUpperCase() + t.slice(1).toLocaleLowerCase()}
                </button>
              ))}
            </div>
          </div>
          <div className="flex justify-between mb-4 items-center">
            <h2 className="text-xl font-bold">Live Document Preview</h2>
            {selectedTemplate === "dos-donts" ? (
              <button
                className="px-4 py-2 rounded-lg cursor-pointer bg-linear-to-r from-blue-300 to-purple-400 text-white font-semibold"
                onClick={() => generateExcelDirect(formData)}
              >
                Download EXCEL
              </button>
            ) : (
              <button
                className="px-4 py-2 rounded-lg cursor-pointer bg-linear-to-r from-blue-300 to-purple-400 text-white font-semibold"
                onClick={() => generateDocument(formData, selectedTemplate)}
              >
                Download DOCX
              </button>
            )}
          </div>

          <div className="border p-6 rounded bg-gray-50 space-y-3">
            {renderTemplate()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewDocument;
