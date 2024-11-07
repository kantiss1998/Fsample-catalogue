import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import MainLayout from "../components/layout/MainLayout";
import Container from "../components/layout/Container";
import Header from "../components/Header";
import ImageGallery from "../components/layout/ImageGalery";
import DetailView from "../components/DetailView";
import product from "../data/ExApi.json";

const ProductDetail = () => {
  const [images, setImages] = useState([]);
  const [colorVarients, setColorVarients] = useState([]);
  const [uniqueProducts, setUniqueProducts] = useState([]);
  const { name, subname, id } = useParams();

  useEffect(() => {
    // Reset data setiap kali parameter berubah
    const filteredProducts = [];
    const tempImages = [];
    const tempColorVarients = [];

    product.forEach((data) => {

        data.Product.forEach((data2) => {
          if (data2.name === subname && data2.subName === name) {
            tempImages.push(...data2.imgUrls);
            filteredProducts.push(data2);
            data2.Colors.forEach((data3) => {
              tempColorVarients.push(data3);
            });
          }
        });
    });

    setImages(tempImages);
    setUniqueProducts(filteredProducts);
    setColorVarients(tempColorVarients);
  }, [name, subname, id]);

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
                productName={`${uniqueProducts[0]?.name || ""} ${
                  uniqueProducts[0]?.subName || ""
                }`}
                colorVarients={colorVarients}
                about={<span></span>}
              />
            </div>
          </section>
        </Container>
      </MainLayout>
    </div>
  );
};

export default ProductDetail;
