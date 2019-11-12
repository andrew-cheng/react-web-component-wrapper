import React from 'react';

import WebComponentWrapper from './wrapper';

const Mark2Demo = () => {
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
      <h1>Mark 2: using a better looking wrapper</h1>
      <WebComponentWrapper
        tagName="ion-content"
        color="primary"
        scrollY="false"
        onIonScrollStart={(event) => console.log(event)}
        ref={wrapperRef}
      >
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
      </WebComponentWrapper>
    </div>
  );
};

export default Mark2Demo;