import LoaderIcon from "../img/icons.svg";
class Spinner {
    render(place) {
        place.innerHTML = `
        <div class="spinner">
            <svg>
                <use href="${LoaderIcon}#icon-loader"></use>
            </svg>
        </div>`
    }
}
export default Spinner;