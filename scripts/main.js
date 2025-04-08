import { FoodTruck } from "./FoodTruck.js"
import { Entrees } from "./Entrees.js"
import { Veggies } from "./Vegetables.js"

const mainContainer = document.querySelector("#container")

const renderAllHTML = async () => {
    const entreeHTML = await Entrees()
    const vegetableHTML = await Veggies()
    // FoodTruck() ??

    const composedHTML = `
        <h1>House of Hummus</h1>
            <article class="menu-options">
                ${entreeHTML}
                ${vegetableHTML}
            </article>
    `

    mainContainer.innerHTML = composedHTML
}

renderAllHTML()

