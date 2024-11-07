import React, { useEffect, useState } from "react";
import MainLayout from "../components/layout/MainLayout";
import Container from "../components/layout/Container";
import Header from "../components/Header";
import Products from "../components/Products";
import { useParams } from "react-router-dom";
import product from "../data/ExApi.json"

const ProductPage = () => {
  const [uniqueProducts, setUniqueProducts] = useState([]);
  const { name } = useParams()

  if (!name) {
    return <div>Loading...</div>;
  }

  console.log(name)

  useEffect(() => {
    const seenNames = new Set();
    let categoryId = null;

    if (name === "segiempat") {
      categoryId = 1;
    } else if (name === "pashmina") {
      categoryId = 2;
    }

    if (categoryId) {
      const filteredProducts = [];

      product.forEach((data) => {
        if (data.id === categoryId) {
          data.Product.forEach((data2) => {
            if (!seenNames.has(data2.name)) {
              console.log(data2)
              seenNames.add(data2.name);
              filteredProducts.push(data2);
            }
          });
        }
      });
      setUniqueProducts(filteredProducts)
    }
  }, [name]);

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
