import MainLayout from "../components/layout/MainLayout";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import CategoriesSection from "../components/CategoriesSection";
import Container from "../components/layout/Container";

function HomePage() {
  return (
    <>
      <div className="bg-gray ">
        <MainLayout
          pageTitle="Catalogue Ansania"
          className="flex flex-col gap-10"
        >
          <Container>
            <Header className={"mt-4"} />
            <HeroSection />
          </Container>
          <CategoriesSection className={"mb-10"}/>
        </MainLayout>
      </div>
    </>
  );
}

export default HomePage;
