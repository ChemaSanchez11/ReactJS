async function getProducts() {
    const url = 'https://fakestoreapi.com/products';
    try {
        const response = await fetch(url);
        return await response.json();
    } catch (e) {
        console.error(e);
    }
}

export default getProducts;