import { Outlet, useNavigation} from "react-router-dom";
import {Header} from "../components/Header";
export const Root = () => {
    const navigation = useNavigation()
    return (
        <div className={'font-sans h-screen'}>
            <Header/>
            <div className={`mt-14 py-10 h-full ${navigation.state === "loading" ? "opacity-50" : "" }`} style={{background: '#1a1a1a'}}>
                <Outlet/>
            </div>
        </div>
    );
};