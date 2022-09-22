import React from 'react';

function Pagination({ page, pageUpdate, numberOfPages }) {
    let currentPage = page;
    const handleClickPrev = () => {
        currentPage = currentPage - 1;
        pageUpdate(currentPage);
    }
    const handleClickNext = () => {
        currentPage = currentPage + 1;
        pageUpdate(currentPage);
    }
    return (
        <div className='pagination'>
            {page === 1 ? '' :
                <button className="btn--inline pagination__btn--prev" onClick={handleClickPrev}>
                    <svg className="search__icon">
                        <use href="../img/icons.svg#icon-arrow-left"></use>
                    </svg>
                    <span>Page {currentPage - 1}</span>
                </button>
            }

            {page === numberOfPages ? '' :
                <button className="btn--inline pagination__btn--next" onClick={handleClickNext}>
                    <span>Page {currentPage + 1}</span>
                    <svg className="search__icon">
                        <use href="../img/icons.svg#icon-arrow-right"></use>
                    </svg>
                </button>}
        </div>
    )
}

export default Pagination;
