import { memo } from "react";

import '../../style/atoms/input/InputField.scss'

export const InputField = memo(({ setValue, ...props }) => {
    return (
        <input {...props} onChange={e => setValue(e)} />
    );
})