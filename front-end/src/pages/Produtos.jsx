import React, { useContext, useEffect } from "react";
import { getFromLocalStorage } from "../services/helpers/servicesLocalStorage";
import getAllProcuts from "../services/apis/getAllProducts";
import NavBar from '../components/Navbar';
import Context from "../context/Context";
import CardProdutos from '../components/CardProdutos'

function Produtos() {
  const { setAllProducts} = useContext(Context);

  useEffect(() => {
    const getProducts = async () => {
      const token = getFromLocalStorage("login_delivery");
      const allProducts = await getAllProcuts(token);
      await setAllProducts(allProducts);
    };
    getProducts();
  }, []);

  return (
    <div>
      <NavBar />
      <CardProdutos/>
    </div>
  );
}

export default Produtos;
