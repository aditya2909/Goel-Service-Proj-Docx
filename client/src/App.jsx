import { Route, Routes } from "react-router-dom";
import Document from "./pages/Document";
import CreateDocument from "./pages/CreateDocument";
import CreateProduct from "./pages/CreateProduct";
import ViewDocument from "./pages/ViewDocument";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Document />} />
        <Route path="/create" element={<CreateDocument />} />
        <Route path="/product" element={<CreateProduct />} />
        <Route path="/document/:id" element={<ViewDocument />} />
      </Routes>
    </>
  );
}

export default App;
