const express = require("express");
const xlsx = require("xlsx");
const fs = require("fs");

const app = express();
const port = 2000;

// Read Excel file
const wb = xlsx.readFile('./XLFILE.xlsx');
const ws = wb.Sheets['JSON'];
const data = xlsx.utils.sheet_to_json(ws);

// Write JSON data to a file
const jsonFilePath = './output.json';
fs.writeFileSync(jsonFilePath, JSON.stringify(data, null, 2)); // The '2' is for indentation

// Endpoint to get the JSON data
app.get("/api/excelData", (req, res) => {
  res.json(data);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
