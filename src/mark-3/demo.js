import React from 'react';

import WebComponentWrapper from './wrapper';

const WrappedWebComponent = WebComponentWrapper(
  'ion-content',
  [
    { name: 'color', value: 'primary' },
    { name: 'scrollY', value: false }
  ],
  [
    { name: 'ionScrollStart', handler: (e) => console.log(e) }
  ]
);

const Mark3Demo = () => {
  const [length, setLength] = React.useState(5);
  const wrapperRef = React.createRef();

  const scrollTo = (position) => {
    switch (position) {
      case 'top':
        wrapperRef.current.scrollToTop(500);
        break;
      case 'bottom':
        wrapperRef.current.scrollToBottom(500)
        break;
      default:
        break;
    }
  }

  return (
    <div style={{ height: '500px' }}>
      <h1>Mark 3: using a higher order component</h1>
      <WrappedWebComponent ref={wrapperRef}>
        <button onClick={() => setLength(length + 5)}>add more</button>
        <button onClick={() => scrollTo('bottom')}>scroll to bottom</button>
        <ion-list>
          {Array.from({ length }, (_v, i) => i).map(i =>
            <ion-item key={i}>
              <ion-label>{i}</ion-label>
            </ion-item>
          )}
        </ion-list>
        <button onClick={() => scrollTo('top')}>scroll to top</button>
      </WrappedWebComponent>
    </div>
  );
};

export default Mark3Demo;