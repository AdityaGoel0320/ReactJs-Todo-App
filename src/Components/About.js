import React from 'react';

const About = () => {
  return (
    <>
      <div className='m-12 flex items-center justify-center flex-col gap-12'>
        <header className='flex items-center justify-center flex-col gap-3 m-12 mb-24'>
          <h1>About This Website</h1>
          <h2>Hi there! I'm Aditya Goel, and I proudly present my React.js project.</h2>
        </header>
        <img src="../images/logo.jpg" alt="todo list photo" />
        <main className='flex items-center justify-center flex-col gap-3'>
          <section className='flex  justify-center flex-col gap-3'>
            <h2>About the Project</h2>
            <h3>Welcome to my React.js project! This application showcases my skills in React.js development, bringing you a dynamic and interactive user experience.</h3>
            <h3>In this project, I've utilized various powerful React.js hooks such as useState, useEffect, useContext, among others. Additionally, I've harnessed the flexibility of JavaScript functions like filter() and map() to handle data efficiently and enhance user interactions.</h3>
          </section>

          <section>
            <h2>Main Features</h2>
            <h3><strong>Use of local storage:</strong> One of the primary highlights of this project is the use of local storage. By using it, you can store all your tasks in local storage and access them anytime.</h3>
          </section>

          <section>
            <h2>Why I Built This</h2>
            <h3>This project has been an exciting opportunity for me to deepen my expertise in React.js and frontend web development. I wanted to challenge myself to create a user-friendly application that demonstrates my passion for building intuitive and visually appealing interfaces.</h3>
            <h3>I hope this project inspires and serves as a testament to my dedication to delivering top-notch web solutions.</h3>
          </section>
        </main>
        <footer>
          <h3>I am happy to connect with you! If you have any questions or feedback, please don't hesitate to reach out. Made with ❤️ by Aditya Goel.</h3>
        </footer>

        <div className='flex items-center justify-center  gap-5 m-5'>
          <a href="https://github.com/AdityaGoel0320" target="_blank" rel="noopener noreferrer" className='color-black'>
            <i id='i' className="fa-brands fa-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/aditya-goel-286245239" target="_blank" rel="noopener noreferrer" className='color-black'>
            <i id="i" className="fa-brands fa-linkedin-in"></i>
          </a>
          <a href="https://twitter.com/AdityaGoel0320?t=DWSov778bgHXMkyQxELrow&s=09" target="_blank" rel="noopener noreferrer" className='color-black'>
            <i id='i' className="fa-brands fa-x-twitter"></i>
          </a>
        </div>
      </div>
    </>
  );
}

export default About;