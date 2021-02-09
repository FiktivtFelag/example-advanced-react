import React from "react";
import {VisibilityContext} from "./VisibilityContext";
import {PropsWithChildren, useState} from "react";

export type ExampleProviderProps = {
    defaultVisibility: boolean;
}

export const VisibilityProvider = (props:PropsWithChildren<ExampleProviderProps>) => {
    const [visibility, setVisibility] = useState(true);

    return <VisibilityContext.Provider value={{visibility, setVisibility}}>
        {props.children}
    </VisibilityContext.Provider>
}
