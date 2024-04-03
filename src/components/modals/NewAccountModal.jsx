import { memo } from "react";
import { InputField } from "../atoms/InputField";
import { IoArrowBack } from "react-icons/io5";

import '../../style/modal/NewAccountModal.scss'
import { Button } from '../atoms/Button';
import { useNewAccountHook } from "../../hooks/newAccountModal/useNewAccountHook";

export const NewAccountModal = memo(({ showModalFlag, onClickShowModalFlag }) => {
    const {
        account,
        onChangeAccount,
        errorMsgs,
        onClickSignup
    } = useNewAccountHook();

    return (
        <>
            {
                showModalFlag && (
                    <div className="overlay">
                        <div className="modal">
                            <div className="header">
                                <IoArrowBack onClick={onClickShowModalFlag} />
                                <h1> アカウントを作成</h1>
                            </div>
                            {errorMsgs && errorMsgs.map((errorMsg, index
                            ) => (
                                <p key={index}>{errorMsg}</p>
                            )
                            )}
                            <form className="new-user-form" action="">
                                <InputField type='text' name='name' value={account.name} setValue={onChangeAccount} placeholder='名前' />
                                <InputField type='text' name='email' value={account.email} setValue={onChangeAccount} placeholder='Eメール' />
                                <InputField type='password' name='password' value={account.password} setValue={onChangeAccount} placeholder='パスワード' />
                                <InputField type='password' name='passwordConfirmation' value={account.passwordConfirmation} setValue={onChangeAccount} placeholder='パスワード(確認)' />
                                <Button onClick={onClickSignup}>アカウント作成</Button>
                            </form>
                        </div>
                    </div>
                )}
        </>
    );
})