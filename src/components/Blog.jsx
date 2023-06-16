import React from 'react';

const Blog = () => {
    return (
        <div>
        <h1 className='text-center text-6xl text-yellow-400 mt-20 mb-10'>Blog</h1>
           <div className='text-2xl text-bold text-left ml-20 mr-40'>
           <div className='text-red-400 mt-10'>
           Q1. Tell us the differences between uncontrolled and controlled components?
          
           <p className='text-xl text-yellow-400 mb-10'> Answer: Uncontrolled components: In uncontrolled components, the form data is handled by the DOM itself. The form inputs maintain their own state, and the data can be accessed using the DOM API. Uncontrolled components are typically used when you don't need to perform validation or manipulation of the input data.
           Controlled components: In controlled components, the form data is handled by React state. The form inputs are bound to state variables, and their values are controlled by React. Whenever the form data changes, the state is updated, and vice versa. Controlled components allow for more control over the form data, enabling validation, manipulation, and synchronization with other components or APIs. in two lines</p>
           </div>
           <div className='text-red-400 mt-10'>
           Q2. How to validate React props using PropTypes
          
           <p className='text-xl text-yellow-400 mb-10'> Answer: To validate React props using PropTypes, follow these steps:

           1. Import the PropTypes module from the 'prop-types' package.
           2.  Define the expected prop types for a component using the PropTypes object.
           3. Assign the defined prop types to the component's propTypes static property.</p>
           </div>
           <div className='text-red-400 mt-10'>
           Q3.  Tell us the difference between nodejs and express js.
          
           <p className='text-xl text-yellow-400 mb-10'> Answer: Node.js is a runtime environment that allows running JavaScript code outside the browser. It provides a scalable, server-side runtime for executing JavaScript. 

           Express.js, on the other hand, is a web application framework built on top of Node.js. It provides a set of features and tools to simplify the development of web applications and APIs, offering an abstraction layer for handling routes, middleware, and request/response handling.
           
            Node.js is the underlying runtime that executes JavaScript, while Express.js is a framework that leverages Node.js to provide additional web application development features and abstractions. </p>
           </div>
           <div className='text-red-400 mt-10'>
           Q4. What is a custom hook, and why will you create a custom hook?
          
           <p className='text-xl text-yellow-400 mb-10'> Answer: 
           A custom hook in React is a special function that you create to reuse logic in your components. It's like a recipe that contains common tasks or behaviors that you can use across different components. By creating a custom hook, you can simplify your code, make it easier to understand, and avoid duplicating the same logic in multiple places. It's a way to organize and share reusable code in your React applications. </p>
           </div>
           
         
           
           
           
           
           </div>
        </div>
    );
};

export default Blog;