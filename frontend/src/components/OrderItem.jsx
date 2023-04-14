import {getImage} from "../services/getImage";
import {Link} from "react-router-dom";

export const OrderItem = ({img, name, brand, price, _id}) => {
    const image = getImage(img)
    return (
        <div className={'md:flex justify-between items-center p-4'}>
            <div className={'flex items-center gap-4'}>
                <Link to={`/products/${_id}`} className={'bg-neutral-200 p-6 text-black rounded-md'}>
                    Подробнее
                </Link>
                <h1>{name}</h1>
                <span>{brand}</span>
                <br/>
                <span>{price}</span>
            </div>
            <img src={image} width={'200px'} alt={'product'}/>
        </div>
    );
};