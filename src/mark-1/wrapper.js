import React from 'react';

function WebComponentWrapper({ children, primitiveAttrs, objectAttrs, onEvent, callMethod }) {
  const componentRef = React.useRef();

  const [eventListeners, setEventListeners] = React.useState(onEvent);

  React.useEffect(() => {
    if (objectAttrs) {
      Object.keys(objectAttrs).forEach(prop => {
        componentRef.current[prop] = objectAttrs[prop];
      });
    }
  }, [objectAttrs]);

  React.useEffect(() => {
    if (onEvent) {
      Object.keys(onEvent).forEach(event => {
        let handler = onEvent[event];
        componentRef.current.removeEventListener(event, eventListeners[event]);
        componentRef.current.addEventListener(event, handler);
      });
      setEventListeners(onEvent);
    }
  }, [onEvent,eventListeners]);

  React.useEffect(() => {
    async function callWebComponentMethod() {
      if (callMethod && callMethod.call) {
        await callMethod.method(componentRef.current);
      };
    }
    callWebComponentMethod();
  }, [callMethod]);

  const webComponent = React.useMemo(
    () => React.cloneElement(children, { ...primitiveAttrs, ref: componentRef }),
    [children, primitiveAttrs]
  );

  return webComponent;
}

export default WebComponentWrapper;