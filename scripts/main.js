import { FoodTruck } from "./FoodTruck.js"

const mainContainer = document.querySelector("#container")

const renderAllHTML = async () => {
    const truckHTML = await FoodTruck() 

    const composedHTML = `
        ${truckHTML}
    `

    mainContainer.innerHTML = composedHTML
}

renderAllHTML()

