import React from 'react';

function WebComponentWrapper(WrappedComponent, objectAttrs, events) {
  const WrappedWebComponent = (props, ref) => {
    const componentRef = React.useRef();

    React.useImperativeHandle(ref, () => componentRef.current);

    React.useEffect(() => {
      objectAttrs.forEach(attr => {
        componentRef.current[attr.name] = attr.value;
      });
    });

    React.useEffect(() => {
      events.forEach(event => {
        componentRef.current.addEventListener(event.name, event.handler);
      })
    });

    return <WrappedComponent {...props} ref={componentRef} />
  };

  return React.forwardRef(WrappedWebComponent);
}

export default WebComponentWrapper;
