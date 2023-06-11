export const TextInput = ({label, name, placeholder}) => {
    return (
        <label className={'text-white md:mx-3'}>
            {label}
            <input type={'text'} placeholder={placeholder} className={'autofill:border-amber-500 m-4 mt-2 text-white border-b-2 border-amber-50 p-3 bg-transparent focus:border-indigo-500 outline-0'} name={name} required={true}/>
        </label>
    );
};