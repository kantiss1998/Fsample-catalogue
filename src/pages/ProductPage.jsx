import React, { useEffect } from "react";
import MainLayout from "../components/layout/MainLayout";
import Container from "../components/layout/Container";
import Header from "../components/Header";
import Products from "../components/Products";
import { useParams } from "react-router-dom";
import product from "../data/ExApi.json"

const ProductPage = () => {
  const uniqueProducts = [];
  const seenNames = new Set();
  const { name } = useParams()

  let categoryId = null;
  if (name === "segiempat") {
    categoryId = 1;
  } else if (name === "pashmina") {
    categoryId = 2;
  }

  product.forEach((data) => {
    if (data.id == categoryId) {
      data.Product.forEach((data2) => {
        if (!seenNames.has(data2.name)) {
          seenNames.add(data2.name);
          uniqueProducts.push(data2);
        }
      });
    }
  });

  uniqueProducts.sort((a, b) => a.name.localeCompare(b.name));

  return (
    <div className="bg-gray ">
      <MainLayout pageTitle="Ansania Hijab" className="flex flex-col gap-10">
        <Container className={"mb-10"}>
          <Header className={"m-4"} />
          <Products productsData={uniqueProducts} />
        </Container>
      </MainLayout>
    </div>
  );
};

export default ProductPage;
