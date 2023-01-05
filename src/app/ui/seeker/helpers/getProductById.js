export const getProductById = async( filtro ) => {
    const url = `http://localhost:4000/api/item/${ filtro }`;
    const resp = await fetch(url);
    const { item } = await resp.json();
    console.log(item);
    return item;
}