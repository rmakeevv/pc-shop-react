import {Link} from "react-router-dom";
import logo from "../assets/images/logo/gear-ico.png";
import {useSelector} from "react-redux";
import userIcon from '../assets/images/UI/free-icon-user-149071.png'
import userCart from '../assets/images/UI/free-icon-cart-8415432.png'

export const Header = () => {
    const auth = useSelector(state => state.auth.value)
    const basket = useSelector(state => state.basket.value)
    return (
        <nav className={'text-white fixed w-full top-0'} style={{background: '#1a1a1a', borderBottom: "1px solid rgb(84 84 84 / 48%)"}}>
            <div className={'container md:flex items-center md:justify-between mx-auto grid px-12'}>
                <div className={'flex items-center h-full px-8'}>
                    <h1 className={'m-1 bol'}>Plugged.In</h1>
                    <Link to={'/'}>
                        <img src={logo} alt={'logo'} className={"w-8"}/>
                    </Link>
                </div>
                <ul className={'flex'}>
                    <li className={'p-4'}>
                        <Link to={'/'}>Главная</Link>
                    </li>
                    <li className={'p-4'}>
                        <Link to={'products'}>Товары</Link>
                    </li>
                </ul>
                <div className={'flex items-center'}>
                    <div className={'flex md:p-0 p-1 items-center'}>
                        <Link to={'/basket'} className={'rounded-md px-3 flex bg-neutral-200 hover:text-black items-center'}>
                            <img src={userCart} alt={'cart'} width={'40px'}/>
                            <div className={'bg-neutral-900 rounded-full px-2 text-white mx-3'}>
                                {0 || basket.items.length }
                            </div>
                        </Link>
                        {
                            auth.isLogged
                                ? <Link to={`/profile/${auth.userId}`} className={'px-4'}>
                                    <img src={userIcon} alt={'user'} width={'40px'}/>
                            </Link>
                                : <Link to={'/auth'} className={'md:px-8 py-3 rounded-md mx-2 text-center flex items-center'}>
                                    <img src={userIcon} alt={'user'} width={'40px'}/>
                                    <span className={'p-3'}>Войти</span>
                                </Link>
                        }
                    </div>
                </div>

            </div>
        </nav>
    );
};