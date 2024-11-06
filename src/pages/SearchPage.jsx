import { useLocation } from "react-router-dom";
import MainLayout from "../components/layout/MainLayout";
import Header from "../components/Header";
import ProductsSubName from "../components/ProductsSubName";
import Container from "../components/layout/Container";
import product from "../data/ExApi.json"

const SearchPage = () => {
  const uniqueProducts = [];
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const query = searchParams.get("q");

  console.log(query);


    product && product.forEach((data) => {
        data.Product.forEach((data2) => {
            if (data2.name.toLowerCase() == query.toLocaleLowerCase() || data2.subName.toLowerCase() == query.toLocaleLowerCase()) {
                uniqueProducts.push(data2)
            }
        })
    })

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
