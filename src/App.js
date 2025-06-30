import React, { useContext } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { ProductContext } from "./contexts/ProductContext";
import { NewsContext } from "./contexts/NewsContext";
import RoutesConfig from "./helpers/route";
import MainPage from "./components/mainPage/MainPage";
import Header from "./components/share/Header";
import Brochure from "./components/share/Brochure";
import Footer from "./components/share/Footer";
import ProductItem from "./components/product/ProductItem";
import News from "./components/news/News";
import Suppliers from "./components/supplier/Suppliers";
import Quotation from "./components/quotation/Quotation";
import NewsItem from "./components/news/NewsItem";
import Space from "./components/share/Space";
import Spinner from "./components/share/Spinner";
import GloveForm from "./components/product/GloveForm";

function App() {
  const { loadNews } = useContext(NewsContext);
  const { loadProduct } = useContext(ProductContext);
  return (
    <Router>
      {loadNews || loadProduct ? (
        <Spinner />
      ) : (
        <div className="App">
          <Header />
          <Routes>
            <Route path={RoutesConfig.home} element={<MainPage />} />
            <Route path={RoutesConfig.products} element={<ProductItem />} />
            <Route path={RoutesConfig.news} element={<News />} />
            <Route path={RoutesConfig.suppliers} element={<Suppliers />} />
            <Route path={RoutesConfig.quotation} element={<Quotation />} />
            <Route path={`${RoutesConfig.news}/:id`} element={<NewsItem />} />
            <Route path={RoutesConfig.gloveform} element={<GloveForm />} />
          </Routes>
          <Space />
          <Brochure />
          <Footer />
        </div>
      )}
    </Router>
  );
}

export default App;
