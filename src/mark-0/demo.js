import React from 'react';

const Mark0Demo = () => {
  const componentRef = React.useRef();
  const [length, setLength] = React.useState(5);

  const scrollTo = (position) => {
    switch (position) {
      case 'top':
        componentRef.current.scrollToTop(500);
        break;
      case 'bottom':
          componentRef.current.scrollToBottom(500);
        break;
      default:
        break;
    }
  }

  return (
    <div style={{ height: '500px' }}>
      <ion-content ref={componentRef} color="primary" scroll-y="false">
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
      </ion-content>
    </div>
  );
};

export default Mark0Demo;