import {Link} from "react-router-dom";
import {Button} from "./Button";
import availableImg from '../assets/images/UI/delivery.png'
export const ProductItem = ({name, brand, price, _id, action, img}) => {
    const picture = `http://localhost:5000/images/${img}`
    return (
        <div className={'md:flex bg-neutral-800 p-8 items-center md:rounded-md'}>
            <Link to={`/products/${_id}`}>
                <img src={picture} alt={name} width={'330px'}/>
            </Link>
            <div className={'flex flex-col md:px-4 justify-start'}>
                <div className={'my-4 flex items-center justify-between gap-4'}>
                    <Link to={`/products/${_id}`}>{brand + " " + name}</Link>
                    <Link to={`/products/${_id}`} className={'px-8 py-3 bg-emerald-700 rounded-md'}>Подробнее</Link>
                </div>
                <div className={'flex flex-col items-start gap-4'}>
                    <div className={'px-6 py-3 bg-white text-black rounded-md font-bold flex items-center gap-4'}>
                        В наличии под заказ!
                        <img src={availableImg} alt={'available'} width={'44px'}/>
                    </div>
                    <div className={'flex items-center justify-center'}>
                        <p className={'text-lg px-4'}>{price + " руб."}</p>
                        <Button action={action} text={'Добавить в корзину'}/>
                    </div>
                </div>
            </div>
        </div>
    );
};