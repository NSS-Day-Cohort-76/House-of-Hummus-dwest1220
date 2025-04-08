const initialState = {
    entreeId: 0,
    vegetableId: 0,
    sideId: 0
}

export const entreeSet = (entreeId) => {
    initialState.entreeId = entreeId
}
export const vegetableSet = (vegetableId) => {
    initialState.vegetableId = vegetableId
}
export const sideSet = (sideId) => {
    initialState.sideId = sideId
}

export const placeOrder = async () => {
        const postOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(initialState)
        }
    
        const response = await fetch("http://localhost:8088/orders", postOptions) 
    
        const customEvent = new CustomEvent("newOrder")
        document.dispatchEvent(customEvent)
    }