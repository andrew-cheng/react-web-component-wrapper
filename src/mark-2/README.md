# Mark 2

This is more satisfactory in terms of usage aesthetics, that is, the code for using this version looks and feel more like React code. This does mean a number of caveats, besides the fact that once again, I have probably violated a number of React rules and ruined performance. 

1. Syntax becomes incredibly important when binding to events, as this is using the literal attribute name of the event handlers passed in to append event listeners. For example:

```javascript
onIonScrollStart={(event) => console.log(event)}
// becomes
addEventListener('ionScrollStart', (event) => console.log(event));
```

2. Using the wrapper still requires using refs in order to call imperative functions (unlike the hacky implementation of "declarative" imperative function calls in Mark 1).