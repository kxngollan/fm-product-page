import "./App.css";
import ProductPage from "./components/ProductPage";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <ProductPage />
      </main>
    </>
  );
}

export default App;
