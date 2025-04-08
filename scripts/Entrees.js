import { entreeSet } from "./TransientState.js"


const handleEntreeChoice = (event) => {
    if (event.target.name === "entree") {
        entreeSet(parseInt(event.target.value))
    }
}

export const Entrees = async () => {
    const response = await fetch("http://localhost:8088/entrees") 
    const entree = await response.json()

    document.addEventListener("change", handleEntreeChoice)

    let html =  `
    <section class="entree-option-list">
        <h2>Entrees</h2> 
`

const entreeHTML = entree.map((entree)=>{
    return `
        <div class="entree-option-container">
            <input type="radio" name="entree" value="${entree.id}" /> ${entree.name}    
        </div>
    `
})
html += entreeHTML.join("")
html += "</section>"
return html
}