import {useContext} from "react";
import {VisibilityContext} from "./VisibilityContext";


export const ExampleContextComponent = () => {
    const {visibility, setVisibility} = useContext(VisibilityContext);

    return <div>
        <button onClick={() => setVisibility(!visibility)}>
            <p>Toggle Visibility</p>
        </button>
        {visibility && <p>Hello</p>}
    </div>

}
