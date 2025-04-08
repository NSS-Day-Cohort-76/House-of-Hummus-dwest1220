export const Veggies = async () => {
    const response = await fetch("http://localhost:8088/vegetables")
    const vegetables = await response.json()

    let html = `
        <section class="vegetable-option-list">
            <h2>Vegetables</h2> 
    `

    const vegetableHTML = vegetables.map((veggie)=>{
        return `
            <div class="vegetable-option-container">
                <input type="radio" name="vegetable" value="${veggie.id}" /> ${veggie.type}    
            </div>
        `
    })
    html += vegetableHTML.join("")
    html += "</section>"
    return html
}
