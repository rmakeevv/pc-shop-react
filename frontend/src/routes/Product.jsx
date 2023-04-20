import {Link, useLoaderData, useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {addItem} from "../basketSlice";
import {getImage} from "../services/getImage";
export const Product = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const data = useLoaderData()
    const picture = getImage(data.img)
    return data
        ? (
            <div className={'text-slate-200 flex p-8 items-stretch justify-center'}>
                <div className='md:flex items-start md:p-8 rounded-md justify-around container'>
                    <img src={picture} alt={'product'} width={'440px'}/>
                    <div className={'grid items-center md:px-8 rounded-md justify-items-start'}>
                        <div className={'flex items-center py-6'}>
                            <h1 className={'text-xl'}>{data.name}</h1>
                            <button className={'ml-10 px-6 py-2 rounded-md bg-emerald-700'} onClick={() => navigate(-1)}>Назад</button>
                        </div>
                        <p className={'md:text-lg py-6'}>Невероятный товар мы можете его приобрести на нашем сайте!</p>
                        <div className={'flex items-center'}>
                            <span className={'pr-4'}> {data.price + ' руб.'} </span>
                            <button className='bg-emerald-700 px-8 py-3 rounded-md m-2' onClick={() => dispatch(addItem(data))}>Купить</button>
                        </div>
                    </div>
                </div>
            </div>
        )
        : (
            <div className={'flex justify-center gap-2 items-center flex-col'}>
                <h1 className={'text-center text-3xl text-white'}>К сожалению товара больше нет в продаже!</h1>
                <Link to={'/products'} className={'px-6 py-3 bg-sky-200 rounded-md'}>На главную!</Link>
            </div>
        )
};