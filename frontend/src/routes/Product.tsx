import {Link, useLoaderData, useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {addItem} from "../basketSlice";
import {getImage} from "../services/getImage";
export const Product = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const data:any = useLoaderData()
    const picture = getImage(data.img)
    return data
        ? (
            <div className={'text-slate-200 flex items-stretch justify-center'}>
                <div className='flex md:flex-row flex-col items-center rounded-md bg-white overflow-hidden max-w-6xl'>
                    <img src={picture} alt={'product'} width={'376px'}/>
                    <div className={'grid items-center justify-items-start px-12 bg-neutral-800'}>
                        <div className={'flex items-center py-6'}>
                            <h1 className={'text-xl'}>{data.name}</h1>
                            <button className={'ml-10 px-6 py-2 rounded-md bg-indigo-600'} onClick={() => navigate(-1)}>Назад</button>
                        </div>
                        <p className={'py-2'}>Хранилище: {data.storage || 'Не указано'}</p>
                        <p className={'py-2'}>Цвет: {data.color || 'Не указано'}</p>
                        <p className={'py-2'}>Процессор: {data.CPU || 'Не указано'}</p>
                        <p className={'py-2'}>Количество ядер: {data.cores || 'Не указано'}</p>
                        <p className={'py-2'}>Оперативная память: {data.RAM || 'Не указано'}</p>
                        <p className={'py-2'}>Производитель: {data.brand || 'Не указано'}</p>
                        <p className={'py-2'}>Категория: {data.category || 'Не указано'}</p>
                        <p className={'py-2'}>Операционная система: {data.OS || 'Не указано'}</p>
                        <p className={'py-2'}>Видеокарта: {data.GPU || 'Не указано'}</p>
                        <div className={'flex items-center'}>
                            <span className={'pr-4'}> {data.price + ' руб.'} </span>
                            <button className='bg-indigo-600 px-8 py-3 rounded-md m-2' onClick={() => dispatch(addItem(data))}>Купить</button>
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