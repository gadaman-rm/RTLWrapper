import React from "react";

function RTLWrapper({ children, dir }) {
    function process(children) {
        if (children && children.props && children.props.children) {
            if (children.props.children.length !== undefined) {
                const processedChild = React.cloneElement(children, {
                    className: `${children.props.className ? children.props.className : ''} ${dir}`, children: React.Children.map(children.props.children,
                        process)
                });
                return processedChild;
            }
            else {
                const processedChild = React.cloneElement(children, {
                    className: `${children.props.className ? children.props.className : ''} ${dir}`,
                    children: process(children.props.children)
                });
                return processedChild; 
            }
        }
        else {
            return children;
        }
    }

    return <React.Fragment>{process(children)}</React.Fragment>;
}

export default RTLWrapper;
