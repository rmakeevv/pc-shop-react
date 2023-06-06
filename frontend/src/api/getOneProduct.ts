export const getOneProduct = async({params}) => {
    const apiURI = await process.env.REACT_APP_API_URI + `/products/${params.id}`
    const data = await fetch(apiURI)
        .then(res => res.json())
        .then(data => data)
        .catch(err => console.log(err.message))
    return data || null
}