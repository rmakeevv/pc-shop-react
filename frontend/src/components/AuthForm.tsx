import {Form} from "react-router-dom";
import {TextInput} from "./TextInput";
import {Button} from "./Button";

export const AuthForm = () => {
    return (
        <Form className={'p-4 text-center flex items-center flex-col'} method={"post"}>
            <TextInput label={'Номер телефона'} name={'number'} placeholder={'+7(000)000-00-00'}/>
            <Button type={'submit'} text={'Войти'}/>
        </Form>
    );
};