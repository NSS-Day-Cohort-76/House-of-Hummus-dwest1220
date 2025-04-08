import { FoodTruck } from "./FoodTruck.js"
import { Veggies } from "./Vegetables.js"

const mainContainer = document.querySelector("#container")

const renderAllHTML = async () => {
    const vegetableHTML = await Veggies()
    // FoodTruck() ??

    const composedHTML = `
        <h1>House of Hummus</h1>
            <article class="menu-options">
                ${vegetableHTML}
            </article>
    `

    mainContainer.innerHTML = composedHTML
}

renderAllHTML()

