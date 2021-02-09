import React from "react";

export type ExampleContextValues = {
    visibility: boolean
    setVisibility: (value:boolean) => void;
};

export const VisibilityContext = React.createContext<ExampleContextValues>({
    visibility: true,
    setVisibility: value => {}
});
