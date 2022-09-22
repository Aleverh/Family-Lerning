'use strict';

class ListOfResults {
  constructor() {
    this.data = [];
    this.currentPage = 1;
    this.numberOfPages = 1;
    this.parrentNode = document.querySelector('.results');
    this.pageSize = 10;
  }

  pagination(pageIncrement = 0) {
    this.numberOfPages = Math.ceil(this.data.length / this.pageSize);
    const slicedData = this.data.slice((this.currentPage + pageIncrement - 1) * this.pageSize, (this.currentPage + pageIncrement) * this.pageSize);
    this.#renderData(slicedData);
    this.currentPage = this.currentPage + pageIncrement;
    this.#btnsRendering();
  }

  #btnsRendering() {
    if(!document.querySelector('.pagination__btn--next')) {
      this.#renderNextPageBtn();
    } else if (!document.querySelector('.pagination__btn--prev')) {
      this.#renderPrevPageBtn();
      this.#updateNextPageBtn();
    } else {
      this.#updateNextPageBtn();
      this.#updatePrevPageBtn();
    };
    this.#renderPrevPageBtn();
    if (this.currentPage === 1) {
      document.querySelector('.pagination__btn--prev').remove();
    };
    if (this.currentPage === this.numberOfPages) {
      document.querySelector('.pagination__btn--next').remove();
    }
  }

  #updateNextPageBtn() {
    const nextPageNumber = document.querySelector('.pagination__btn--next').children[0];
    nextPageNumber.textContent = `Page ${this.currentPage + 1}`;
  }

  #updatePrevPageBtn() {
    const prevPageNumber = document.querySelector('.pagination__btn--prev').children[0];
    prevPageNumber.textContent = `Page ${this.currentPage - 1}`;
  }

  #renderNextPageBtn() {
    document.querySelector('.pagination').insertAdjacentHTML('beforeend',
      `
        <button class="btn--inline pagination__btn--next">
          <span>Page ${this.currentPage + 1}</span>
          <svg class="search__icon">
            <use href="src/img/icons.svg#icon-arrow-right"></use>
          </svg>
        </button>
      `
    )
  }

  #renderPrevPageBtn() {
    document.querySelector('.pagination').insertAdjacentHTML('afterbegin',
      `
        <button class="btn--inline pagination__btn--prev">
          <svg class="search__icon">
            <use href="src/img/icons.svg#icon-arrow-left"></use>
          </svg>
          <span>Page ${this.currentPage - 1}</span>
        </button>
      `
    )
  }

  #renderData(slicedData) {
    this.parrentNode.innerHTML = '';
    document.querySelector('.pagination').innerHTML = '';
    slicedData.forEach(element => {
      this.parrentNode.insertAdjacentHTML('beforeend',
        `
          <li class="preview">
            <a class="preview__link preview__link--active" href="#${element.id}">
              <figure class="preview__fig">
                <img src="${element.image_url}" alt='${element.title}'>
              </figure>
              <div class="preview__data">
                <h4 class="preview__title">${element.title}</h4>
                <p class="preview__publisher">${element.publisher}</p>
                <div class="preview__user-generated">
                  <svg>
                    <use href="${element.image_url}"></use>
                  </svg>
                </div>
              </div>
            </a>
          </li>
        `
      )
    });
  }

  get resultData() {
    return this.data;
  }

  set resultData(value) {
    return this.data = value;
  }
}

export default ListOfResults;