import { memo } from "react";

import '../../style/atoms/input/InputField.scss'

export const InputField = memo(({ type, value, setValue
    , placeholder }) => {
    return (
        <input type={type} value={value} placeholder={placeholder} onChange={e => setValue(e.target.value)} />
    );
})