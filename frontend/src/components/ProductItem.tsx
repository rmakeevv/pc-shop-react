import {Link} from "react-router-dom";
import {Button} from "./Button";
import {getImage} from "../services/getImage";
export const ProductItem = ({name, brand, price, _id, action, img}) => {
    const picture = getImage(img)
    return (
        <div className={'flex-col flex gap-4 bg-white justify-end md:rounded-md overflow-hidden'}>
            <Link to={`/products/${_id}`} className={'flex justify-center p-2'}>
                <img src={picture} alt={name} width={'220px'}/>
            </Link>
            <div className={'flex flex-col justify-center gap-3 items-start bg-neutral-800 py-4 px-12'}>
                <div className={'my-4 flex items-center justify-between gap-4'}>
                    <Link to={`/products/${_id}`}>{brand + " " + name}</Link>
                </div>
                <Link to={`/products/${_id}`} className={'px-8 py-3 bg-indigo-800 rounded-md text-white'}>Подробнее</Link>

                <div className={'flex items-center justify-between gap-6'}>
                    <p className={'text-lg'}>{price + " руб."}</p>
                    <Button action={action} text={'Добавить в корзину'}/>
                </div>
            </div>
        </div>
    );
};