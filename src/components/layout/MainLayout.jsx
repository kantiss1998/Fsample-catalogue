import React from "react";


const MainLayout = ({ pageTitle, className, children }) => {
  React.useEffect(() => {
    document.title = pageTitle ?? "Catalogue Ansania";
  }, [pageTitle]);

  return (
    <main className={`${className ?? ""} `}>
      {children}
    </main>
  );
};

export default MainLayout;
