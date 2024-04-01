import { memo } from "react";
import { InputField } from "../atoms/InputField";
import { IoArrowBack } from "react-icons/io5";

import { Button } from "../atoms/Button";
import '../../style/modal/NewAccountModal.scss'

export const NewAccountModal = memo(({ showModalFlag, onClickShowModalFlag }) => {
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
                            <form className="new-user-form" action="">
                                <InputField placeholder='名前' />
                                <InputField placeholder='Eメール' />
                                <InputField placeholder='パスワード' />
                                <InputField placeholder='Eメール(確認)' />
                                <Button>アカウント作成</Button>
                            </form>
                        </div>
                    </div>
                ) : <></>}
        </>
    );
})