import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
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
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const loadProductData = () => {
      setIsLoading(true);
      setError(null);

      try {
        const { name, subname, id } = params;
        
        // Log untuk debugging
        console.log('Current URL:', window.location.pathname);
        console.log('Params received:', { name, subname, id });

        if (!name || !subname || !id) {
          throw new Error('Missing required parameters');
        }

        const decodedName = decodeURIComponent(name);
        const decodedSubname = decodeURIComponent(subname);

        console.log('Decoded params:', { decodedName, decodedSubname, id });

        const filteredProducts = [];
        const tempImages = [];
        const tempColorVarients = [];

        let foundProduct = false;

        product.forEach((data) => {
          data.Product.forEach((data2) => {
            // Log untuk debugging
            console.log('Comparing:', {
              productName: data2.name,
              productSubName: data2.subName,
              withDecoded: { decodedSubname, decodedName }
            });

            if (data2.name === decodedSubname && data2.subName === decodedName) {
              foundProduct = true;
              tempImages.push(...data2.imgUrls);
              filteredProducts.push(data2);
              data2.Colors.forEach((data3) => {
                tempColorVarients.push(data3);
              });
            }
          });
        });

        if (!foundProduct) {
          throw new Error('Product not found');
        }

        setImages(tempImages);
        setUniqueProducts(filteredProducts);
        setColorVarients(tempColorVarients);
      } catch (error) {
        console.error('Error loading product:', error);
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    loadProductData();
  }, [params]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Error: {error}</h1>
          <button 
            onClick={() => navigate('/')}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Return to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray min-h-screen flex flex-col">
      <MainLayout pageTitle="Ansania Hijab" className="flex flex-col flex-grow">
        <Container className="flex-grow flex flex-col mb-10">
          <Header className="m-4" />
          <section className="mt-8 flex flex-col md:flex-row justify-between items-start gap-8 flex-grow">
            <div className="w-full md:w-1/2 lg:w-3/5">
              {images.length > 0 ? (
                <ImageGallery
                  galleryImages={images}
                  productName={`${uniqueProducts[0]?.name || ""} ${
                    uniqueProducts[0]?.subName || ""
                  }`}
                />
              ) : (
                <div>No images available</div>
              )}
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