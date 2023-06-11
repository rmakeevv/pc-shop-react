export const getProducts = async({request}) => {
    const url = new URL(request.url)
    const order = url.searchParams.get('order')
    const urlApi = order
        ? process.env.REACT_APP_API_URI + `/categories/${order}`
        : process.env.REACT_APP_API_URI + `/products/`
    const data = await fetch(urlApi)
        .then(res => res.json())
        .then(data => data)
        .catch(err => console.log(err.message))
    return data || null
}