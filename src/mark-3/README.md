# Mark 3

Mark 2 really functions a lot like a HOC without actually being one, which begs the question of why not make this whole generalized web component wrapper in React a HOC?

That question leads to Mark 3, a HOC that helps wrapping a web component to provide a better React dev interface. The result is kind of meh to be honest. The data structure for passing attributes and event handlers is much like Mark 1, and the requirement to use a ref for calling imperative functions is much like Mark 2.

Unlike previous versions, Mark 3 doesn't really require a removeEventListener clean-up process, since it really only gets rendered once, and any attempts at changing properties or attributes require removing and adding the component from and back into the DOM again.

This is actually a pretty good solution in my opinion if you have a static web component, but, the use case is so small that this is very useless.