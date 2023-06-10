import {Form, useSubmit} from "react-router-dom";

export const SortForm = () => {
    const submit = useSubmit()
    return (
        <Form method={"get"} className={'text-white align-center flex md:gap-6 p-2'}>
            <div className={'flex md:flex-row flex-col items-center'}>
                <span className={'md:text-xl m-2'}>По цене</span>
                <select name={'order'} className={'text-indigo-300 rounded-sm px-2 bg-neutral-900'} onChange={(event) => submit(event.currentTarget.form)}>
                    <option value={'desc'}>Сначала дороже</option>
                    <option value={'asc'}>Сначала дешевле</option>
                </select>
            </div>
        </Form>
    );
};