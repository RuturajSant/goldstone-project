import { useEffect, useState } from "react";
import exportUser from "./apis/exportUsers";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Users from "./pages/User";
import EditUser from "./pages/EditUser";
function App() {
  const exportFunction = async () => {
    const response = await exportUser();
    setCsvData(response);
    console.log(response);
    handleDownload();
  };

  const handleDownload = () => {
    const element = document.createElement("a");
    const file = new Blob([csvData], { type: "text/csv" });
    element.href = URL.createObjectURL(file);
    element.download = "data.csv";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  const [csvData, setCsvData] = useState("");
  return (
    <>
      <div className="flex items-start justify-evenly">
        <h1 className="text-3xl font-bold underline">Gorest Users</h1>
        <button
          onClick={exportFunction}
          className="flex text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
        >
          Download CSV
        </button>
      </div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Users />} />
          <Route path="/user/:id" element={<EditUser />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
