import userIcon from '../assets/images/UI/user-circle-icon-png.png'
import {Link, redirect} from "react-router-dom";
import {Button} from "../components/Button";
import {useDispatch, useSelector} from "react-redux";
import {logOut} from "../authSlice";
export const loader = () => {
    if (!localStorage.getItem('token')) {
        return redirect('/auth')
    } else return null
}

export const Profile = () => {
    const auth = useSelector(state => state.auth.value)
    const dispatch = useDispatch()
    const pageLogOut = () => {
        localStorage.clear()
        dispatch(logOut())
    }

    return (
            <div className={'justify-center text-white container mx-auto'}>
                <div className={'flex flex-col p-4 rounded-md items-center gap-6'}>
                    {
                        auth.isLogged
                            ? (
                                <>
                                    <img src={userIcon} width={'56px'} className={'rounded-md m-2'} alt={'user-ico'}/>
                                    <h1>Мой профиль</h1>
                                    <Link to={`/orders/${auth.userId}`} className={'px-6 py-3 text-black bg-neutral-200 rounded-md'}>Просмотреть мои заказы</Link>
                                    <Button type={'submit'} action={pageLogOut} text={'Сменить пользователя'}/>
                                </>
                            )
                            : (
                                <>
                                    <h1>Вы вышли из аккаунта!</h1>
                                    <Link to={'/auth'} className={'p-4 bg-emerald-700 rounded-md'}>Окей</Link>
                                </>
                            )
                    }

                </div>
            </div>
    )
};