import { memo, useCallback, useState } from "react";
import { IconContext } from "react-icons";
import { FaTwitter } from "react-icons/fa";

import { Button } from "../../atoms/Button"
import '../../../style/pages/toppage/Home.scss'
import { NewAccountModal } from "../../modals/NewAccountModal";

export const Home = memo(() => {
    const buttonClass = {
        newUser: 'newUserBtn',
        login: 'loginBtn'
    };

    const [showModalFlag, setShowModalFlag] = useState(false);

    const onClickShowModalFlag = useCallback(() => {
        setShowModalFlag(!showModalFlag);
    }, [setShowModalFlag, showModalFlag]);

    return (
        <div className="home">
            <div className="left">
                <IconContext.Provider value={{ size: '100%', color: 'rgb(29, 155, 240)' }}>
                    <FaTwitter />
                </IconContext.Provider>
            </div>
            <div className="right">
                <h1>すべての話題が、ここに。</h1>
                <h4>今すぐ参加しましょう。</h4>
                <Button className={buttonClass.newUser} onClickFunc={onClickShowModalFlag}>アカウントを作成</Button>
                または
                <Button className={buttonClass.login}>ログイン</Button>
            </div>
            <NewAccountModal showModalFlag={showModalFlag} onClickShowModalFlag={onClickShowModalFlag} />
        </div>
    )
})