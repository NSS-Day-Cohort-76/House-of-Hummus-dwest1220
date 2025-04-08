import { sideSet } from "./TransientState.js"

const handleSideChoice = (event) => {
    if (event.target.name === "side") {
        sideSet(parseInt(event.target.value))
    }
}

export const Sides = async () => {
    const response = await fetch("http://localhost:8088/sides")
    const side = await response.json()

    document.addEventListener("change", handleSideChoice)

    let html = `
        <section class="side-option-list">
            <h2>Sides</h2> 
    `

    const sideHTML = side.map((side)=>{
        return `
            <div class="side-option-container">
                <input type="radio" name="side" value="${side.id}" /> ${side.title}    
            </div>
        `
    })
    html += sideHTML.join("")
    html += "</section>"
    return html
}

