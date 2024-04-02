import { memo } from 'react';
import '../../style/atoms/button/Button.scss'

export const Button = memo(({ children, className, onClickFunc }) => {
    return (
        <button className={className} onClick={onClickFunc}>{children}</button>
    );
})