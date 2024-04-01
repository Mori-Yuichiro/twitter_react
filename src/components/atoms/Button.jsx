import { memo } from 'react';
import '../../style/atoms/button/Button.scss'

export const Button = memo(({ children, className, onClickShowModalFlag }) => {
    return (
        <button className={className} onClick={onClickShowModalFlag}>{children}</button>
    );
})