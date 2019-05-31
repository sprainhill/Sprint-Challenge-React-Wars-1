# Answers

1.  What is React JS and what problems does it try and solve?

React JS is a library that allows us to combine JavaScript, HTML, and CSS to render UI to the browser in a modular component based manner. It attempts to solve the problem of 'state', which is the data we have access to in our applications and how we can interact with it in a dynamic way at scale.

1.  What does it mean to _think_ in react?

Thinking in React means two things. First, it means thinking about designing your UI when using best practices so that each component is responsible for only one thing. Secondly, it means thinking about the state-props highway, which means thinking about which parent or shared component needs to manage state (the data that will change), which will require a Class Component, and then figuring out which components will only receive and render static data, which will be your functional components.

1.  Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.

A Class/Stateful component will have some state assigned to it, meaning that it will take, manage, and pass dynamic data down the state-props highway. A Functional Component is a function that receives data in the form of props and displays that data in a modular way to the user without changing the underlying data itself.

1.  Describe state.

State is the current data our application has access to and the form the data is in. It can update over time based on user input and external factors.

1.  Describe props.

Props are the current iteration of state that we pass to child components in order to display the current data we have. It is read-only.
