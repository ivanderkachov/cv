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
        Dedicated and efficient aspiring Frontend Developer (ReactJS, NodeJS),
        passionate about building and improving web applications and UI & UX.
      </p>
      <p>
        Self-taught in both Frontend & Backend Technologies. Experienced with
        HTML/CSS, JavaScript, React, Redux, Node.js (Express.js) and more...
      </p>
      <p>
        Also great experience in non-development area - Logistics management -
        that gives me abilities to lead and manage; analytical, problem solving
        and organizational skills; ability to work independently and handle
        multiple projects.
      </p>
      <p>
        I’m highly motivated, team player, fast learner, seeking to learn and
        improve my skills as a Frontend Developer by
        learning from more seasoned developers the best code practices.
      </p>
      <h1>Skills: </h1>
      <ul>
        <li> Frontend: HTML/CSS, CSS frameworks & libraries, JavaScript, React & Redux (Thunk), experience with TypeScript </li>
        <li> Backend: NodeJS & Express, experience with NestJS </li>
        <li> Database: MongoDB & Mongoose, PostgreSQL & Sequelize</li>
        <li> Security: JWT, Bcrypt, Passport</li>
      </ul>
      <h1>Education: </h1>
      <ul>
        <li>
          Donetsk National Technical University (Faculty of computer information
          technologies and automation)
        </li>
      </ul>

      <h1>Languages</h1>
      <ul>
        <li>Ukrainian: native speaker</li>
        <li>Russian: native speaker</li>
        <li>English: intermediate</li>
      </ul>
    </div>
  );
}

export default App;
