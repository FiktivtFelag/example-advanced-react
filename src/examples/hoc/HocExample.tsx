import React from "react";
import {withName, WithNameProps} from "./withName";

export interface HocExampleProps extends WithNameProps {
   greeting:string;
};

export const HocExample = withName((props:HocExampleProps) => {
   return <p>{props.greeting} {props.name}</p>
});
