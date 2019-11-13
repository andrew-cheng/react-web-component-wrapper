# Mark 3

Mark 2 really functions a lot like a HOC without actually being one, which begs the question of why not make this whole generalized web component wrapper in React a HOC?

That question leads to Mark 3, a HOC that helps wrapping a web component to provide a better React dev interface. The result is kind of meh to be honest. The data structure for passing attributes and event handlers is much like Mark 1, and the requirement to use a ref for calling imperative functions is much like Mark 2.

Strangely, unlike previous versions, Mark 3 doesn't require a removeEventListener clean-up process, which is very alarming, as it means the web component is being removed and then added back to the DOM on every render, and that's exactly what happens... Yikes?