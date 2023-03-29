import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';

export function Pagination({ perPage, total, totalPage, changePage }) {
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(1);

  // Simulate fetching items from another resources.
  // (This could be items from props; or items loaded in a local state
  // from an API endpoint with useEffect and useState)
  const endOffset = itemOffset + perPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);

  // Invoke when user click to request another page.
  const handlePageClick = event => {
    const newOffset = (event.selected * perPage) % total;
    // console.log(
    //   `User requested page number ${event.selected}, which is offset ${newOffset}`,
    // );
    changePage(event.selected + 1);
    setItemOffset(newOffset);
  };

  function f(p) {
    console.log(p);
  }

  return (
    <ReactPaginate
      breakLabel="..."
      nextLabel=">"
      onPageChange={handlePageClick}
      pageRangeDisplayed={3}
      pageCount={totalPage}
      previousLabel="<"
      renderOnZeroPageCount={null}
      containerClassName="paginate__container"
      pageClassName="paginate__page"
      pageLinkClassName="paginate__link"
      previousClassName="paginate__page--prev"
      nextClassName="paginate__page--next"
      previousLinkClassName="paginate__link--prev"
      nextLinkClassName="paginate__link--next"
      disabledClassName="paginate__page--disabled"
      disabledLinkClassName="paginate__link--disabled"
      activeClassName="paginate__page--active"
      activeLinkClassName="paginate__link--active"
      breakClassName="paginate__page--break"
      breakLinkClassName="paginate__link--break"
      onPageActive={f}
    />
  );
}
