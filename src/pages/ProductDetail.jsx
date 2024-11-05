import React from "react";
import { useParams } from "react-router-dom";
import MainLayout from "../components/layout/MainLayout";
import Container from "../components/layout/Container";
import Header from "../components/Header";
import ImageGallery from "../components/layout/ImageGalery";
import DetailView from "../components/DetailView";
import product from "../data/ExApi.json"

const ProductDetail = () => {
  let images = [];
  const colorVarients = [];
  const uniqueProducts = [];
  const { name, subname, id } = useParams();

  console.log(name, subname)

  let categoryId = null;
  if (name === "segiempat") {
    categoryId = 1;
  } else if (name === "pashmina") {
    categoryId = 2;
  }

  product.forEach((data) => {
    data.Product.forEach((data2) => {
      if (data2.name == subname) {
        if (data2.subName == name) {
          images = data2.imgUrls
          uniqueProducts.push(data2)
          data2.Colors.forEach((data3) => {
            colorVarients.push(data3)
          })
        }
      }
    });
  });

  return (
    <div className="bg-gray min-h-screen flex flex-col">
      <MainLayout pageTitle="Ansania Hijab" className="flex flex-col flex-grow">
        <Container className="flex-grow flex flex-col mb-10">
          <Header className="m-4" />
          <section className="mt-8 flex flex-col md:flex-row justify-between items-start gap-8 flex-grow">
            <div className="w-full md:w-1/2 lg:w-3/5">
              <ImageGallery
                galleryImages={images}
                productName="My product name"
              />
            </div>
            <div className="w-full md:w-1/2 lg:w-2/5">
              <DetailView
                productName={`${uniqueProducts[0]?.name} ${uniqueProducts[0]?.subName}`}
                colorVarients={colorVarients}
                about={
                  <span>
                  </span>
                }
              />
            </div>
          </section>
        </Container>
      </MainLayout>
    </div>
  );
};

export default ProductDetail;
