import ExcelJS from "exceljs";
import { saveAs } from "file-saver";

export const generateExcelDirect = async (data) => {
  const workbook = new ExcelJS.Workbook();
  const sheet = workbook.addWorksheet("Do & Donts");

  // 🔥 COLUMN WIDTH
  sheet.columns = [{ width: 5 }, { width: 40 }, { width: 25 }, { width: 25 }];

  // 🔥 HEADER
  sheet.mergeCells("A1:D1");
  const title = sheet.getCell("A1");
  title.value = "DO's & DON'Ts For Equipment";
  title.font = { bold: true, size: 14 };
  title.alignment = { horizontal: "center" };

  // 🔥 CLIENT INFO
  sheet.getCell("A3").value = "Client:";
  sheet.getCell("B3").value = data.clientName;

  sheet.getCell("A4").value = "Location:";
  sheet.getCell("B4").value = data.projLocation;

  sheet.getCell("C3").value = "PO No:";
  sheet.getCell("D3").value = data.orderNo;

  sheet.getCell("C4").value = "Description:";
  sheet.getCell("D4").value = data.productLabel;

  sheet.getCell("C5").value = "Date:";
  sheet.getCell("D5").value = new Date(data.orderDate);

  // 🔥 BORDER STYLE FUNCTION
  const addBorder = (cell) => {
    cell.border = {
      top: { style: "thin" },
      left: { style: "thin" },
      bottom: { style: "thin" },
      right: { style: "thin" },
    };
  };

  // Apply borders
  ["A3", "B3", "C3", "D3", "A4", "B4", "C4", "D4"].forEach((cell) => {
    addBorder(sheet.getCell(cell));
  });

  // 🔥 DO’s SECTION
  let row = 7;

  sheet.getCell(`A${row}`).value = "DO's";
  sheet.getCell(`A${row}`).font = { bold: true };

  row++;

  const dos = [
    "Keep engine clean",
    "Check fuel level",
    "Ensure proper ventilation",
  ];

  dos.forEach((item) => {
    sheet.getCell(`B${row}`).value = item;
    row++;
  });

  // 🔥 DON'Ts SECTION
  row += 1;

  sheet.getCell(`A${row}`).value = "DON'Ts";
  sheet.getCell(`A${row}`).font = { bold: true };

  row++;

  const donts = [
    "Don't start engine without checking oil",
    "Don't overload generator",
    "Don't mix different fuels",
  ];

  donts.forEach((item) => {
    sheet.getCell(`B${row}`).value = item;
    row++;
  });

  // 🔥 FOOTER
  row += 2;

  sheet.getCell(`A${row}`).value = "Prepared By";
  sheet.getCell(`B${row}`).value = "Checked By";
  sheet.getCell(`C${row}`).value = "Approved By";

  ["A", "B", "C"].forEach((col) => {
    const cell = sheet.getCell(`${col}${row}`);
    cell.font = { bold: true };
    cell.alignment = { horizontal: "center" };
    addBorder(cell);
  });

  // 🔥 EXPORT
  const buffer = await workbook.xlsx.writeBuffer();

  saveAs(new Blob([buffer]), `${data.projName}_DoDonts.xlsx`);
};
