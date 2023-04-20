import {Link} from "react-router-dom";
import {Button} from "./Button";
import {removeItem} from "../basketSlice";
import {useDispatch} from "react-redux";
import {getImage} from "../services/getImage";

export const BasketItem = ({ _id, name, brand, price, basketItemId, img}) => {
    const image = getImage(img)
    const dispatch = useDispatch()
    return (
        <div className={'p-4 text-white md:flex justify-center'}>
            <img width={'320px'} src={image} alt={'product'}/>
            <div className={'flex flex-col items-start justify-center px-6'}>
                <div className={'flex flex-col'}>
                    <Link to={`/products/${_id}`}>
                        {brand + " " + name}
                    </Link>
                    <span>{price}</span>
                </div>
                <Button text={'Удалить'} action={() => dispatch(removeItem(basketItemId))}/>
            </div>
        </div>
    );
};