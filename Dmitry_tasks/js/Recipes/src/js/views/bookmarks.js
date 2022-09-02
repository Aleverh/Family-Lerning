import LoaderIcon from '../../img/icons.svg';
import {bookmarksList} from "../constants.js";
class Bookmarks {
    renderAddBookmark(data){
        const bookmarksMessage = document.getElementById('message-bookmarks');
        if (data.length === 0){
                this.renderError()
        } else if (bookmarksMessage){
            bookmarksMessage.style.display = "none";
        }

        data.forEach(elem => {
            bookmarksList.innerHTML += `
            <li class="preview" id="${elem.id}">
                <a class="preview__link" href="#${elem.id}">
                    <figure class="preview__fig">
                         <img src="${elem.image_url}" alt="${elem.title}" />
                    </figure>
                    <div class="preview__data">
                        <h4 class="preview__name">${elem.title}</h4>
                        <p class="preview__publisher">${elem.publisher}</p>
                    </div>
                </a>
            </li> 
        `
        })
    }
    renderError(){
        bookmarksList.innerHTML = `
        <div class="message" id="message-bookmarks">
            <div>
                <svg>
                <use href="${LoaderIcon}#icon-smile"></use>
                </svg>
            </div>
            <p>No bookmarks yet. Find a nice recipe and bookmark it :)</p>
        </div>`
    }
}
export default Bookmarks;