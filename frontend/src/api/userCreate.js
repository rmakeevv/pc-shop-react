import {redirect} from "react-router-dom";
export const userCreate = async ({request}) => {
    const formData = await request.formData();
    const {number} = Object.fromEntries(formData);
    if (isNaN(Number(number))) {
        return 'Неправильно набран номер!'
    }
    const userData = {phone : number}
    const data = await fetch(`http://localhost:5000/users`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(userData)
    })
        .then(res => res.json())
        .then(data => data)
        .catch((err) => console.log(err.message))
    const userId = data.insertedId || data._id
    await localStorage.setItem("token", data.token)
    await localStorage.setItem("userId", userId)
    return data
        ? redirect(`/profile/${userId}`)
        : redirect('/auth')
}