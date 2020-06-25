import React from "react";
import Pagination from "rc-pagination";

import "./Pagination.scss";

export default function PaginationMovie({
  currentPage,
  totalItems,
  onChangePage,
}) {
  return (
    <Pagination
      className="pagination"
      current={currentPage}
      total={totalItems}
      pageSize={20}
      onChange={onChangePage}
    />
  );
}
