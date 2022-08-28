import { BrowserRouter, Routes, Route } from "react-router-dom";
import CardPagina from "./page/CardPagina";
import Homer from "./page/Homer";
import Context from "./page/Context";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homer />} />
        <Route path="/homer/:id" element={<Context />} />
        <Route path="/card" element={<CardPagina />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
