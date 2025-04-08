

export const Sales = async () => {
    const sales = await fetch("http://localhost:8088/orders?_expand=entree&_expand=vegetable&_expand=side").then(res => res.json())

    let salesDivs = sales.map((sale)=>{
        const salePrice = sale.entree.price + sale.vegetable.price + sale.side.price
        const formattedTotal = salePrice.toFixed(2)
        return `
            <div class="sales-container">Receipt #${sale.id} = $${formattedTotal}</div>
        `
    })

    salesDivs = salesDivs.join("")

    return salesDivs
}

