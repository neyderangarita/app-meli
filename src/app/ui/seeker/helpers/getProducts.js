export const getProducts = async( filtro ) => {
    const url = `http://localhost:4000/api/items?q=${ filtro }`;
    const resp = await fetch(url);
    const { items } = await resp.json();
    console.log(items);

    return items;
}