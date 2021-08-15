# Interview Answers

Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. These will not be counted as a part of your sprint score but will be helpful for preparing you for your endorsement interview, and enhancing overall understanding.

1. What are the main differences between a stateful and a functional component?

   - Stateful components contain state data that is dynamic and keeps track of its changes with logic. They are able to update the data and pass it around to where it needs to go based on changing conditions such as user input or an API call. A functional component is strictly presentational and will always render out the same thing or what data is given to them via props.

2. When does a componentDidMount function be called? What about a componentDidUpdate?

   - componentDidMount is called only once after the component renders, componentDidUpdate is called when specified state or props change in the course of the component's lifecycle.

3. Define stateful logic.

   - Stateful logic is the logic built into a component that executes its logical operations on stored stateful values on that component.

4. What are the three step of creating a successful test? What is done in each phase?
   - Arrange: render the component to be tested
   - Act: define the elements to be tested, perform user interaction on those elements
   - Assert: test for expected values for the elements defined in Act based on the interaction performed
