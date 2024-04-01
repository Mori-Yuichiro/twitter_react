import { memo } from "react";

import '../../style/atoms/input/InputField.scss'

export const InputField = memo(({ placeholder }) => {
    return (
        <input type="text" placeholder={placeholder} />
    );
})