import ReactPaginate from 'react-paginate'
import React from 'react';
import "./paginator.css";

const Paginator = ({handlePageClick, pageCount, activePageNumber}) => {
    return (
        <div className="pag__container">
            <ReactPaginate
                initialPage={activePageNumber - 1}
                disableInitialCallback={true}
                previousLabel="Previous"
                nextLabel="Next"
                pageClassName="page-item"
                pageLinkClassName="page-link"
                previousClassName="page-item"
                previousLinkClassName="page-link"
                nextClassName="page-item"
                nextLinkClassName="page-link"
                breakClassName="page-item"
                breakLinkClassName="page-link"
                containerClassName="pagination bg-transparent"
                activeClassName="active"
                breakLabel="..."
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={pageCount}
                renderOnZeroPageCount={null}
            />
        </div>
    )
};

export default Paginator;

