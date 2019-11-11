# Mark 1

It works, but it's ugly. It probably violates a number or React principles (but then again, that's kind of unavoidable when trying to use web components in React).

This approach abuses useEffect and useMemo hooks to simulate imperative behaviors, which unfortunately are how most interactions with web components work, considering they extend DOM API directly. [This may change soon though.](https://blog.usejournal.com/w3c-declarative-custom-elements-proposal-b9640e54a5fd)