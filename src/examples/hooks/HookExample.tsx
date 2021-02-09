import React, {useEffect, useRef, useState} from "react";


export const HookExample = () => {
    const [max, setMax] = useState<number>(0);
    const ref = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if(!ref?.current) {
            return;
        }
        ref.current.maxLength = max;
    }, [max]);

    const onChange = (event:any) => {
        setMax(event.target.value);
    }

    return (<div>
        <input placeholder={"Max Value"} onChange={onChange} />
        <input ref={ref}/>
    </div>)
};
