import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import MainLayout from "../components/layout/MainLayout";
import Header from "../components/Header";
import ProductsSubName from "../components/ProductsSubName";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../api/productSlice";
import Footer from "../components/Footer";
import Container from "../components/layout/Container";

const SearchPage = () => {
  const uniqueProducts = [];
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const query = searchParams.get("q");

  const dispatch = useDispatch();
  const { products, status, error } = useSelector((state) => state.products);

    products && products.forEach((data) => {
        data.Products.forEach((data2) => {
            if (data2.name.toLowerCase() == query.toLocaleLowerCase() || data2.subName.toLowerCase() == query.toLocaleLowerCase()) {
                uniqueProducts.push(data2)
            }
        })
    })

    
  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchProducts());
    }
  }, [status, dispatch]);
  return (
    <div className="bg-gray ">
      <MainLayout pageTitle="Ansania Hijab" className="flex flex-col gap-10">
        <Container className={"mb-10"}>
          <Header className={"m-4"} />
          <ProductsSubName productsData={uniqueProducts} />
        </Container>
      </MainLayout>
    </div>
  );
};

export default SearchPage;
