import React from "react";
function RTLWrapper({
  children,
  dir
}) {
  function process(children) {
    if (children && children.props && children.props.children) {
      if (children.props.children.length !== undefined) {
        const processedChild = /*#__PURE__*/React.cloneElement(children, {
          className: `${children.props.className ? children.props.className : ''} ${dir}`,
          children: React.Children.map(children.props.children, process)
        });
        return processedChild;
      } else {
        const processedChild = /*#__PURE__*/React.cloneElement(children, {
          className: `${children.props.className ? children.props.className : ''} ${dir}`,
          children: process(children.props.children)
        });
        return processedChild;
      }
    } else {
      return children;
    }
  }
  return /*#__PURE__*/React.createElement(React.Fragment, null, process(children));
}
export default RTLWrapper;