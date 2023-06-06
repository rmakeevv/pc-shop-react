import {useDispatch, useSelector} from "react-redux";
import {createOrderApi} from "../api/createOrderApi";
import {checkOut} from "../basketSlice";
import {getDate} from "../services/getDate";

export const CheckoutInfoPanel = () => {
    // @ts-ignore
    const basket = useSelector(state => state.basket.value)
    // @ts-ignore
    const auth = useSelector(state => state.auth.value)
    const dispatch = useDispatch()
    const total = basket.items.reduce((accumulator, currentValue) => accumulator + currentValue.price, 0)
    const createOrder = () => {
        const order = {
            items: basket.items,
            date: getDate(),
            userId: auth.userId
        }
        createOrderApi(order)
            .then( data => data)
        dispatch(checkOut())
    }

    return (
        <div className={'flex items-center justify-center'}>
            <span> Итого {total}</span>
            <span className={'m-4'}>
                        Товаров в заказе: {basket.items.length}
                    </span>
            <button className={'px-6 py-3 bg-neutral-100 rounded-md text-black'} onClick={createOrder}>Заказать</button>
        </div>
    );
};