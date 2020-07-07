import React, { useContext } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import { ProductContext } from './contexts/ProductContext';
import { NewsContext } from './contexts/NewsContext';
import Routes from "./helpers/route";
import MainPage from './components/mainPage/MainPage';
import Header from './components/share/Header';
import Brochure from './components/share/Brochure';
import Footer from './components/share/Footer';
import ProductItem from './components/product/ProductItem';
import News from './components/news/News';
import Suppliers from './components/supplier/Suppliers';
import Quotation from './components/quotation/Quotation';
import NewsItem from './components/news/NewsItem';
import Space from './components/share/Space';
import Spinner from './components/share/Spinner';
import GloveForm from './components/product/GloveForm';

function App() {
  const { loadNews } = useContext(NewsContext);
  const { loadProduct } = useContext(ProductContext);
  return (
    <Router>
      {(loadNews || loadProduct) ? <Spinner /> : (
        <div className="App">
          <Header />
          <Switch>
            <Route exact path={Routes.home} component={MainPage} />
            <Route exact path={Routes.products} component={ProductItem} />
            <Route exact path={Routes.news} component={News} />
            <Route exact path={Routes.suppliers} component={Suppliers} />
            <Route exact path={Routes.quotation} component={Quotation} />
            <Route exact path={`${Routes.news}/:id`} component={NewsItem} />
            <Route exact path={Routes.gloveform} component={GloveForm} />
          </Switch>
          <Space />
          <Brochure />
          <Footer />
        </div>
      )}
    </Router>
  );
}

export default App;