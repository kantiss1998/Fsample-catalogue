import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import ProductCardsWrapper from "./layout/ProductCardsWrapper";
import './css/pagination.css'

const  Products = ({ productsData }) => {
  const [currentPage, setCurrentPage] = useState(0);

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  const productsPerPage = 9;
  const offset = currentPage * productsPerPage;
  const paginatedData = productsData.slice(offset, offset + productsPerPage);

  return (
    <div className="flex flex-col gap-y-[64px]">
      <ProductCardsWrapper
        productsData={paginatedData}
        className="grid-cols-3 lg:gap-[10px] xl:gap-[16px]"
        productImageClassName="max-h-[399px]"
      />
      <ReactPaginate
        pageCount={Math.ceil(productsData.length / 9)}
        onPageChange={handlePageChange}
        containerClassName="pagination"
        activeClassName="active"
        disabledClassName="disabled"
        previousLabel={"Previous"}
        nextLabel={"Next"}
        pageLinkClassName="page-link"
      />
    </div>
  );
};

export default Products;
