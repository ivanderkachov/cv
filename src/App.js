import React from "react";

import './App.css'

const App = () => {
  return (
    <div className="App">
      <h1>Ivan Derkachov</h1>
      <h1>Contact info:</h1>
      <ul>
        <li>Phone: +38-066-605-16-93</li>
        <li>Email: i.i.derkachov@gmail.com</li>
        <li>
          GitHub:
          <a href="https://github.com/ivanderkachov">ivanderkachov</a>
        </li>
      </ul>
      <h1>About me:</h1>
      <p>
        Dedicated and Efficient Aspiring Fullstack Developer, Passionate About
        Building and Improving Web Applications and UI & UX.
      </p>
      <p>
        I have been studying for both Front-end & Back-end Technologies for the
        last year. Experienced with JavaScript(ES5-ES9), React, Redux, Node Js,
        Express Js, Mongo DB and More…
      </p>
      <p>
        I’m Highly Motivated, Team Player, Fast Learner, Seeking to Learn and
        Improve My Skills as a Fullstack Developer by Learning from More
        Seasoned Developers the Best Code Practices.
      </p>
      <h1>Skills: </h1>
      <ul>
        <li>
          Frontend: Creating the Frontend Using SCSS, JavaScript (ES5-ES9),
          React & Redux
        </li>
        <li>Backend: Creating the Backend Using NodeJs and ExpressJs</li>
        <li>
          Database: Storing Data Using MongoDB Database using Dynamic Queries
        </li>
        <li>
          Security: Secure User Information Using Middleware Authentication and
          JWT
        </li>
      </ul>
      <h1>Education: </h1>
      <ul>
        <li>Donetsk National Technical University (Faculty of computer information technologies and automation)</li>
      </ul>

      <h1>Languages</h1>
      <ul>
        <li>
          Ukrainian: native speaker
        </li>
        <li>
          Russian: native speaker
        </li>
        <li>
          English: intermediate
        </li>
      </ul>
    </div>
  );
}

export default App;
