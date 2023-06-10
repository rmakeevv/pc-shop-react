import {Link} from "react-router-dom";
export const Main = () => {
    return (
        <div className={'text-white bg-slate-900'}>
            <div className={'md:flex py-32 md:px-8 rounded-md items-center container mx-auto justify-around main-section'}>
                <div className={'flex p-12 flex-col items-center gap-8 bg-slate-900 rounded-md'}>
                    <h1 className={'md:text-3xl text-center font-bold text-xl'}>Магазин компьютерной техники</h1>
                    <Link to={'products'} className={'font-bold text-white bg-indigo-800 px-8 py-4 rounded-md hover:underline'}>Перейти в каталог</Link>
                </div>
            </div>
        </div>
    );
};