import userIcon from '../assets/images/UI/user-circle-icon-png.png'
import {useDispatch, useSelector} from "react-redux";
import {logIn, logOut} from "../authSlice";
import {Link, useLoaderData} from "react-router-dom";
import {Button} from "../components/Button";
import {authUser} from "../basketSlice";
export const loader = ({params}) => params

export const Profile = () => {
    const auth = useSelector(state => state.auth.value)
    const dispatch = useDispatch()
    const {number} = useLoaderData()
    const buttonRedirect = () => {
        dispatch(logOut())
    }
    const authProfile = () => {
        dispatch(logIn(number))
        dispatch(authUser(number))
    }

    return auth.isLogged ? (
            <div className={'justify-center text-white container mx-auto'}>
                <div className={'flex flex-col p-4 rounded-md items-center gap-6'}>
                    <img src={userIcon} width={'56px'} className={'rounded-md m-2'} alt={'user-ico'}/>
                    <h1>Мой профиль</h1>
                    <Link to={`/orders/${auth.userId}`} className={'px-6 py-3 text-black bg-neutral-200 rounded-md'}>Просмотреть мои заказы</Link>
                    <Button type={'submit'} action={buttonRedirect} text={'Сменить пользователя'}/>
                </div>
            </div>
    ) : (
        <div className={'flex items-center justify-around flex-col container mx-auto'}>
            <h1 className={'text-xl text-white px-2 py-4'}>Номер подтвержден!</h1>
            <div className={'flex items-center gap-6 p-6 flex-col'}>
                <button onClick={authProfile} className={'bg-emerald-700 px-8 py-2 rounded-md text-white'}>Войти!</button>
                <Link to={'/auth'} className={'px-6 py-3 rounded-md hover:underline bg-neutral-200 '}>Войти в другой аккаунт</Link>
            </div>
        </div>
    )
};