import {Link} from "react-router-dom";

export const MyLink = ({href, text}) => {
    return (
        <Link to={href} className={'text-white p-4 px-8 text-xl bg-emerald-700 rounded-md'}>{text}</Link>
    );
};