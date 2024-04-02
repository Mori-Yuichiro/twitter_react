import { useCallback, useState } from "react";
import { AuthHook } from "../auth/authHook";

export const useNewAccountHook = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('');
    const { signUp } = AuthHook();
    const [errorMsgs, setErrorMsgs] = useState([]);

    const generateParam = useCallback(() => {
        return {
            name,
            email,
            password,
            passwordConfirmation
        };
    }, [name, email, password, passwordConfirmation])

    const onClickSignup = async (e) => {
        try {
            e.preventDefault();
            const params = generateParam();
            await signUp(params);
        } catch (error) {
            console.log(error.response.data.errors.full_messages);
            setErrorMsgs(error.response.data.errors.full_messages);
        }
    }

    return {
        name,
        setName,
        email,
        setEmail,
        password,
        setPassword,
        passwordConfirmation,
        setPasswordConfirmation,
        errorMsgs,
        onClickSignup
    };
}