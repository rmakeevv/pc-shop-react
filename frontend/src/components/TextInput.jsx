export const TextInput = ({label, name}) => {
    return (
        <label className={'text-white md:mx-3'}>
            {label}
            <input type={'text'} className={'md:m-4 mt-2 text-slate-900 p-3 rounded-md focus:bg-emerald-200'} name={name} required={true}/>
        </label>
    );
};