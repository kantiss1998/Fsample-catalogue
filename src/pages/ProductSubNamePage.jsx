import React, { useEffect, useState } from "react";
import MainLayout from "../components/layout/MainLayout";
import Header from "../components/Header";
import Container from "../components/layout/Container";
import ProductsSubName from "../components/ProductsSubName";
import { useParams } from "react-router-dom";
import product from "../data/ExApi.json";

const ProductSubNamePage = () => {
  const [uniqueProducts, setUniqueProducts] = useState([]);
  const { name, subname } = useParams();

  if (!name || !subname) {
    return <div>Loading...</div>;
  }

  console.log(name, subname)

  useEffect(() => {
    let categoryId = null;

    if (name === "segiempat") {
      categoryId = 1;
    } else if (name === "pashmina") {
      categoryId = 2;
    }

    if (categoryId && subname) {
      const filteredProducts = [];

      product.forEach((data) => {
        if (data.id === categoryId) {
          data.Product.forEach((data2) => {
            if (data2.name === subname) {
              filteredProducts.push(data2);
            }
          });
        }
      });

      setUniqueProducts(filteredProducts);
    }

    console.log(uniqueProducts)
  }, [name, subname]);

  return (
    <div className="bg-gray">
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
