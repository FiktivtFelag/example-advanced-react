import React from "react";

export interface WithNameProps {
    name: string;
}

export const withName = <P extends WithNameProps>(WrappedComponent:React.ComponentType<P>) =>
    // (props:P) => {
    //     return <WrappedComponent {...props}/>;
    // }

    class extends React.Component<P> {
        render() {
            return <WrappedComponent {...this.props}/>;
        }
    }
