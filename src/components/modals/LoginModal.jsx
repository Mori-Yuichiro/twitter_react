import { memo } from "react";
import { IoArrowBack } from "react-icons/io5";

import '../../style/modal/LoginModal.scss'
import { InputField } from "../atoms/InputField";
import { Button } from '../atoms/Button';
import { useLoginHook } from "../../hooks/loginModal/useLoginHook";


export const LoginModal = memo(({ showLoginModal, onClickShowLoginModal }) => {
    const { loginAccount, errorMsgs, onChangeLoginAccount, onClickLogin } = useLoginHook();

    if (!showLoginModal) return <></>
    return (
        <div className="overlay">
            <div className="modal">
                <div className="header">
                    <IoArrowBack onClick={onClickShowLoginModal} />
                    <h1>ログイン</h1>
                </div>
                {errorMsgs && errorMsgs.map((errorMsg, index
                ) => (
                    <p key={index}>{errorMsg}</p>
                )
                )}
                <form className="login-form" action="">
                    <InputField type='text' name='email' value={loginAccount.email} onChange={onChangeLoginAccount} placeholder='Eメール' />
                    <InputField type='password' name='password' value={loginAccount.password} onChange={onChangeLoginAccount} placeholder='パスワード' />
                    <Button onClick={onClickLogin}>ログイン</Button>
                </form>
            </div>
        </div>
    );
})