import React from 'react';

const formatEventName = (unformatted) => {
  return unformatted.slice(2, 3).toLowerCase() + unformatted.slice(3);
}

function WebComponentWrapper({tagName, children, ...props}, ref) {

  const componentRef = React.useRef();

  const [eventListers, setEventListeners] = React.useState({});

  React.useImperativeHandle(ref, () => componentRef.current);

  React.useEffect(() => {
    Object.keys(props).forEach(key => {
      if (typeof props[key] === 'function') {
        let events = eventListers;
        componentRef.current.removeEventListener(formatEventName(key), eventListers[key]);
        componentRef.current.addEventListener(formatEventName(key), props[key]);
        events[key] = props[key];
        setEventListeners(events);
      } else {
        componentRef.current[key] = props[key];
      }
    })
  });

  return React.createElement(tagName, { ref: componentRef }, children);
}

export default React.forwardRef(WebComponentWrapper);