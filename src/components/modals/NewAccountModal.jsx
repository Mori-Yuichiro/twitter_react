import { memo } from "react";
import { InputField } from "../atoms/InputField";
import { IoArrowBack } from "react-icons/io5";

import '../../style/modal/NewAccountModal.scss'
import { Button } from '../atoms/Button';
import { useNewAccountHook } from "../../hooks/newAccountModal/useNewAccountHook";

export const NewAccountModal = memo(({ showModalFlag, onClickShowModalFlag }) => {
    const {
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
    } = useNewAccountHook();

    return (
        <>
            {
                showModalFlag ? (
                    <div className="overlay">
                        <div className="modal">
                            <div className="header">
                                <IoArrowBack onClick={onClickShowModalFlag} />
                                <h1> アカウントを作成</h1>
                            </div>
                            {errorMsgs && errorMsgs.map((errorMsg, index
                            ) => {
                                return (
                                    <p key={index}>{errorMsg}</p>
                                )
                            })}
                            <form className="new-user-form" action="">
                                <InputField type='text' value={name} setValue={setName} placeholder='名前' />
                                <InputField type='text' value={email} setValue={setEmail} placeholder='Eメール' />
                                <InputField type='password' value={password} setValue={setPassword} placeholder='パスワード' />
                                <InputField type='password' value={passwordConfirmation} setValue={setPasswordConfirmation} placeholder='パスワード(確認)' />
                                <Button onClickFunc={onClickSignup}>アカウント作成</Button>
                            </form>
                        </div>
                    </div>
                ) : <></>}
        </>
    );
})