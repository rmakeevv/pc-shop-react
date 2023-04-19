export const getProducts = async({request}) => {
    const url = new URL(request.url)
    const category = url.searchParams.get('category')
    const order = url.searchParams.get('order')
    const urlApi = category
        ? `http://localhost:5000/categories/${category}/${order}`
        : `http://localhost:5000/products/`
    const data = await fetch(urlApi)
        .then(res => res.json())
        .then(data => data)
        .catch(err => console.log(err.message))
    return data || null
}