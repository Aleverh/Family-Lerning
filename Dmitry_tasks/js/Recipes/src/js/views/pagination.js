const www = document.querySelector('.pagination')
import LoaderIcon from '../../img/icons.svg';
class Pagination{
    viewPagination(){
        www.innerHTML =
            `<button class="btn--inline pagination__btn--prev">
                <svg class="search__icon">
                    <use href="${LoaderIcon}#icon-arrow-left"></use>
                </svg>
                <span class="btn--prev-text">Page 1</span>
            </button>
            <button class="btn--inline pagination__btn--next">
                <span class="btn--next-text">Page 2</span>
                <svg class="search__icon">
                    <use href="${LoaderIcon}#icon-arrow-right"></use>
                </svg>
            </button>
        `
    }
}
export default Pagination;