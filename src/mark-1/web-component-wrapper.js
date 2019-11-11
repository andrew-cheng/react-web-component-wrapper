import React from 'react';

function WebComponentWrapper({children, attributes, properties, onEvent, callMethod}) {
    const componentRef = React.useRef();
  
    React.useEffect(() => {
      if (properties) {
        Object.keys(properties).forEach(prop => {
          componentRef.current[prop] = properties[prop];
        });
      }
    }, [properties]);

    React.useEffect(() => {
      if (onEvent) {
        Object.keys(onEvent).forEach(event => {
          componentRef.current.addEventListener(event, onEvent[event]);
        });
      }
    }, [onEvent]);
      
    React.useEffect(() => {
      async function callWebComponentMethod() {
        if (callMethod && callMethod.call) {
          await callMethod.method(componentRef.current);
        };
      }
      callWebComponentMethod();
    }, [callMethod]);
    
    const webComponent = React.useMemo(
      () => React.cloneElement(children, {...attributes, ref: componentRef}),
      // eslint-disable-next-line
      [children.type, attributes, properties]
    );

    return webComponent;
}

export default WebComponentWrapper;