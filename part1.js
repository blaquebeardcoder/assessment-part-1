/**
 * Part 1: 30%, you must create a repo for part 1, separate from part 2
 
1. Why does React utilize the virtual-dom?
--------------------------------------------------------- 
The DOM (Document Object Model) is a visual representation of the UI/UX of an application.  Whenever there is a change in the state of an app UI, like updating a status, adding a task, or displaying new information, the DOM gets updated to reflect that change.

A virtual DOM is faster because it calculates the best method to make changes to the real DOM without adding extra operations to the real DOM.
-------------------------------------------------------

2a How is data flowed in React? 
---------------------------------------------------------
In React, data flows DOWN from the parent component to the child component via props.  This allows the child component to render the data later.  Data is then sent back UP from the child to parent component with the help of callback functions, which are enabled for certain ACTIONS like "onClick" or "onPress". 
---------------------------------------------------------

2b. Why is React architected this way?
---------------------------------------------------------
React is setup this way to avoid the unneccessary process of having to reload every single UI component on a web application just to update the state of 1 component or feature.
---------------------------------------------------------
 
3. What is the purpose for lifting state up in React? Give an example of this
---------------------------------------------------------
The purpose of lifting state in React is to allow several components to reflect the same change in state or data.

For example,

In React, sharing state is accomplished by lifting it up to the closest common ancestor of the components that need it. This is called “lifting state up”, and incorporates "props" to do this. 
---------------------------------------------------------
 
4. Why would a startup be interested in applying React-Routing to a project? Explain in detail.
---------------------------------------------------------
Startups are usually cash-strapped, and there is definitely cost benefits and savings that can be attained by incorporating client side routing on a single page application.

Client side routing is required to keep your application in sync with the browser URL. In client Side routing along with the entire page, you can serve a specific portion of a page, reuse the DOM, manually manage the URL and history states, and minimize API calls needed to render information.
---------------------------------------------------------
 
5. Can browsers read JSX? Why?
---------------------------------------------------------
In short, no.  Browsers can only read JavaScript objects, and JSX is a markup syntax... a hybrid of JavaScript && HTML.  In order for the browswer to be able to render and read JSX, it needs a bundler like BABEL to process and parse the information.
---------------------------------------------------------
 
6. What is the significance of keys in React? 
---------------------------------------------------------
Key attributes are super important because they help to identify which items have changed, are appended, or are removed. Keys should be given to the elements inside the array to maintain a stable identity. When children have keys, React uses the key to match children in the original tree with children in the subsequent tree.
---------------------------------------------------------
 
7. What is the difference between Props and State?
---------------------------------------------------------
Props, short for properties, are passed directly into a component, similar to how an argument is passed to a function. Props also don't change.  State, on the other hand, holds info about the component, and keeps track when the component creates, updates happen. State is also CHANGEABLE.
---------------------------------------------------------
 
8. Examine the code below: In relation to React, explain what is occurring, and why it’s significant. 
 
Babel Input: ES2015 arrow function
[1, 2, 3].map( n => n + 1 )
 
Babel Output: ES5 equivalent
[1,2,3].map(function(n) {
Return n + 1;
})
 
---------------------------------------------------------
From my observations, an older JavaScript version syntax has been used in a React application, utilizing an arrow function.  Babel, which parses and transpiles the function, reverts it to a standard function syntax utilizing the declaration "function", along with an argument, and a "return" statement.  Babel is making the code compatible for the (deprecated) ES2015 version.
---------------------------------------------------------

9. Given an array of strings, names, return a new array with each name properly capitalized. Must use .map() 
Show 3 test runs, with at least 2 edge cases. 
function properNames(names) {
 
}
 
---------------------------------------------------------
const people = ["bronx", "bRooklyn", "queens", "manhattan", "HARLEM"];

function capitalizeNames(people) {
    return people.map(function(name) { 
        return name.split(' ').map(function(word) { 
            return word[0].toUpperCase() + word.slice(1).toLowerCase();
        });
    });
}

console.log(capitalizeNames(people));

Edgecase 1: ALL CAPS
Edgecase 2 : Random CAP letter in name
---------------------------------------------------------


10. Given an array of strings, return a new array that only includes those that are 6 characters or fewer in length. Must use .filter()
Show 3 test runs, with at least 2 edge cases. 
Function smallWordsOnly(arr) {

} 

---------------------------------------------------------

---------------------------------------------------------

 */