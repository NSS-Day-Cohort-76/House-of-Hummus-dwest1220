export const Entrees = async () => {
    const response = await fetch("http://localhost:8088/entrees") 
    const entree = response.json()
}