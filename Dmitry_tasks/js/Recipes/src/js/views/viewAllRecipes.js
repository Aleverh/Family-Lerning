import { allRecipes } from "../constants.js";
import View from "./spiner";
class ViewAllRecipe extends View {
    render(data) {
        data.forEach(elem => {
            allRecipes.innerHTML += `
                <li class="preview" id="${elem.id}">
                    <a class="preview__link preview__link--active" href="#${elem.id}">
                      <figure class="preview__fig">
                        <img src="${elem.image_url}" alt="${elem.title}" />
                      </figure>
                      <div class="preview__data">
                        <h4 class="preview__title">${elem.title}</h4>
                        <p class="preview__publisher">${elem.publisher}</p>
                      </div>
                    </a>
                </li>
            `
        })

    }
}

export default ViewAllRecipe;