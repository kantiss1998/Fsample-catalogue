import React, { useEffect } from "react";
import MainLayout from "../components/layout/MainLayout";
import Header from "../components/Header";
import Container from "../components/layout/Container";
import ProductsSubName from "../components/ProductsSubName";
import { useParams } from "react-router-dom";
import product from "../data/ExApi.json"

const ProductSubNamePage = () => {
  const uniqueProducts = [];
  const { name, subname } = useParams();

  let categoryId = null;
  if (name === "segiempat") {
    categoryId = 1;
  } else if (name === "pashmina") {
    categoryId = 2;
  }

  product.forEach((data) => {
    if (data.id == categoryId) {
      data.Product.forEach((data2) => {
          if (data2.name == subname) {
            uniqueProducts.push(data2);
          }
      });
    }
  });

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

export default ProductSubNamePage;
