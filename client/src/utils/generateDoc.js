import PizZip from "pizzip";
import Docxtemplater from "docxtemplater";
import { saveAs } from "file-saver";

export const generateDocument = async (data, templateNo) => {
  try {
    // 👉 load correct template dynamically
    const response = await fetch(`/template/${templateNo}.docx`);
    const content = await response.arrayBuffer();

    const zip = new PizZip(content);
    const doc = new Docxtemplater(zip, {
      paragraphLoop: true,
      linebreaks: true,
      delimiters: {
        start: "<<",
        end: ">>",
      },
    });

    // 🔥 Replace placeholders
    doc.setData({
      projName: data.projName,
      projLocation: data.projLocation,
      clientName: data.clientName,
      productName: data.productName.prodName, // 👈 important
      orderNo: data.orderNo,
      engineNo: data.engineNo,
      alternatorNo: data.alternatorNo,
      warrantyStartDate: data.warrantyStartDate,
      warrantyEndDate: data.warrantyEndDate,
    });

    doc.render();

    const blob = doc.getZip().generate({
      type: "blob",
      mimeType:
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    });

    saveAs(blob, `${data.projName}_${templateNo}.docx`);
  } catch (error) {
    console.error("Doc generation error:", error);
  }
};
