import {Link, useLoaderData} from "react-router-dom";
import {OrderItem} from "../components/OrderItem";
export const loader = async ({params}) => {
    const {userid} = params
    const data = await fetch(`http://localhost:5000/orders/${userid}`,
        {
            headers: {
                "authorization": "Bearer: " + localStorage.getItem("token"),
            }
        }
    ,)
        .then(res => res.json())
        .then(data => data)
        .catch((err) => console.log(err.message))
    return data || null
}
export const Orders = () => {
    const data = useLoaderData()
    return data[0]
        ? (
            <div className={'grid gap-4 mx-auto container text-white rounded-md md:px-12 py-4'}>
                    <h1 className={'text-center p-2'}>Ваши заказы</h1>
                    {
                        data.map(({items, _id, date}, key) => {
                            return (
                                <div className={'bg-neutral-800 text-white md:p-4 rounded-md flex flex-col gap-4'} key={key}>
                                    <div className={'flex items-center'}>
                                        <h1 className={'p-4'}> Номер заказа: {_id}</h1>
                                        <span>Дата: { date || 'no date'}</span>
                                    </div>
                                    <hr/>
                                    {
                                        items.map((item, key) => <OrderItem key={key} {...item}/>)
                                    }
                                </div>
                            )
                        })
                    }
            </div>
    )
        : (
            <div className={'flex items-center flex-col p-4'}>
                <h1 className={'text-center text-white text-xl'}>Вы еще не делали заказов!</h1>
                <Link to={'/products'} className={'font-medium bg-emerald-700 text-white px-6 py-3 m-4 rounded-md'}>Перейти в каталог!</Link>
            </div>
        )
};