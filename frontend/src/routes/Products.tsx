import { useLoaderData} from "react-router-dom";
import {ProductItem} from "../components/ProductItem";
import {SortForm} from "../components/SortForm";
import {useDispatch} from "react-redux";
import {addItem} from "../basketSlice";
export const Products = () => {
    const dispatch = useDispatch()
    const data: any = useLoaderData()
    return  (
            <div className={'flex flex-col container mx-auto md:px-12'}>
                <div className={'px-8 py-4 md:rounded-xl flex items-center md:flex-row flex-col justify-between'} style={{border: "1px solid rgb(84 84 84 / 48%)"}} >
                    <h1 className={'md:text-xl text-white text-center'}>{data ? "В наличии "  + data.length + " товар(ов)" : "error"}</h1>
                    <SortForm/>
                </div>
                <div className={'grid grid-cols-3 md:gap-4 text-white py-2'}>
                    {
                        data[0]
                            ? data.map((item, key) => <ProductItem key={key} {...item} action={() => dispatch(addItem(item))}/>)
                            : (
                                <div className={'text-white p-4'}>
                                    <h1>Товары не найдены! Попробуйте позже.</h1>
                                </div>
                            )
                    }
                </div>
            </div>
    )
}