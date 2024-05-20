const componentsData = [
  {
    name: "Sidebar resopnsive",
    image: `https://ft.syncfusion.com/featuretour/angular-js2/images/sidebar/mobile-friendly-sidebar.gif`,
    description: "This is the description for Component 4.",
    isPaid: true,
    tags: ["sidebar", "responsive sidebar", "navigation", "menu"],
    category: "Sidebar",
    code: {
      htmlCss: `<!DOCTYPE html>
  <html>
  <head>
      <title>Component 4</title>
      <style>
          body {
              background-color: #f4f4f4;
              font-family: Arial, sans-serif;
          }
          .sidebar {
              height: 100%;
              width: 250px;
              position: fixed;
              top: 0;
              left: 0;
              background-color: #111;
              overflow-x: hidden;
              padding-top: 20px;
          }
          .sidebar a {
              padding: 10px 15px;
              text-decoration: none;
              font-size: 18px;
              color: white;
              display: block;
          }
          .sidebar a:hover {
              background-color: #575757;
          }
      </style>
  </head>
  <body>
      <div class="sidebar">
          <a href="#home">Home</a>
          <a href="#services">Services</a>
          <a href="#clients">Clients</a>
          <a href="#contact">Contact</a>
      </div>
  </body>
  </html>`,
      reactCss: `import React from 'react';
  import './Component4.css';
  
  function Sidebar() {
      return (
          <div className="sidebar">
              <a href="#home">Home</a>
              <a href="#services">Services</a>
              <a href="#clients">Clients</a>
              <a href="#contact">Contact</a>
          </div>
      );
  }
  
  export default Sidebar;
  
  /* Component4.css */
  .sidebar {
      height: 100%;
      width: 250px;
      position: fixed;
      top: 0;
      left: 0;
      background-color: #111;
      overflow-x: hidden;
      padding-top: 20px;
  }
  .sidebar a {
      padding: 10px 15px;
      text-decoration: none;
      font-size: 18px;
      color: white;
      display: block;
  }
  .sidebar a:hover {
      background-color: #575757;
  }`,
      reactTailwind: `import React from 'react';
  
  function Sidebar() {
      return (
          <div className="h-full w-64 fixed top-0 left-0 bg-gray-900 p-5">
              <a href="#home" className="block text-white py-2 px-4 hover:bg-gray-700">Home</a>
              <a href="#services" className="block text-white py-2 px-4 hover:bg-gray-700">Services</a>
              <a href="#clients" className="block text-white py-2 px-4 hover:bg-gray-700">Clients</a>
              <a href="#contact" className="block text-white py-2 px-4 hover:bg-gray-700">Contact</a>
          </div>
      );
  }
  
  export default Sidebar;`,
    },
  },
  {
    name: "Product Card",
    image: `https://ft.syncfusion.com/featuretour/angular-js2/images/card/angular-card-customization.png`,
    description: "This is the description for Component 5.",
    isPaid: false,
    tags: ["card", "responsive card", "info card", "product card"],
    category: "Card",
    code: {
      htmlCss: `<!DOCTYPE html>
  <html>
  <head>
      <title>Component 5</title>
      <style>
          body {
              background-color: #f9f9f9;
              font-family: Arial, sans-serif;
              display: flex;
              justify-content: center;
              align-items: center;
              height: 100vh;
          }
          .card {
              background-color: white;
              border-radius: 10px;
              box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
              width: 300px;
              padding: 20px;
              text-align: center;
          }
          .card img {
              border-radius: 50%;
              width: 100px;
          }
          .card h2 {
              margin: 15px 0;
          }
          .card p {
              color: #666;
          }
      </style>
  </head>
  <body>
      <div class="card">
          <img src="https://via.placeholder.com/100" alt="Profile Picture">
          <h2>John Doe</h2>
          <p>Web Developer</p>
      </div>
  </body>
  </html>`,
      reactCss: `import React from 'react';
  import './Component5.css';
  
  function ProfileCard() {
      return (
          <div className="card">
              <img src="https://via.placeholder.com/100" alt="Profile Picture" />
              <h2>John Doe</h2>
              <p>Web Developer</p>
          </div>
      );
  }
  
  export default ProfileCard;
  
  /* Component5.css */
  .card {
      background-color: white;
      border-radius: 10px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      width: 300px;
      padding: 20px;
      text-align: center;
  }
  .card img {
      border-radius: 50%;
      width: 100px;
  }
  .card h2 {
      margin: 15px 0;
  }
  .card p {
      color: #666;
  }`,
      reactTailwind: `import React from 'react';
  
  function ProfileCard() {
      return (
          <div className="bg-white rounded-lg shadow-lg w-80 p-5 text-center">
              <img src="https://via.placeholder.com/100" alt="Profile Picture" className="rounded-full w-24 mx-auto"/>
              <h2 className="text-xl font-bold my-3">John Doe</h2>
              <p className="text-gray-600">Web Developer</p>
          </div>
      );
  }
  
  export default ProfileCard;`,
    },
  },
  {
    name: "Group Buttons",
    image: `https://ft.syncfusion.com/featuretour/aspnet-core-blazor-razor-components/images/button-group/blazor-button-group-split-button-integration.gif`,
    description: "This is the description for Component 6.",
    isPaid: true,
    tags: ["buttons", "responsive button", "action button", "clickable", "group buttons"],
    category: "Button",
    code: {
      htmlCss: `<!DOCTYPE html>
  <html>
  <head>
      <title>Component 6</title>
      <style>
          body {
              background-color: #e0f7fa;
              font-family: Arial, sans-serif;
              display: flex;
              justify-content: center;
              align-items: center;
              height: 100vh;
          }
          .button {
              background-color: #00796b;
              color: white;
              padding: 15px 25px;
              border: none;
              border-radius: 5px;
              cursor: pointer;
          }
          .button:hover {
              background-color: #004d40;
          }
      </style>
  </head>
  <body>
      <button class="button">Click Me</button>
  </body>
  </html>`,
      reactCss: `import React from 'react';
  import './Component6.css';
  
  function ActionButton() {
      return (
          <button className="button">Click Me</button>
      );
  }
  
  export default ActionButton;
  
  /* Component6.css */
  .button {
      background-color: #00796b;
      color: white;
      padding: 15px 25px;
      border: none;
      border-radius: 5px;
      cursor: pointer;
  }
  .button:hover {
      background-color: #004d40;
  }`,
      reactTailwind: `import React from 'react';
  
  function ActionButton() {
      return (
          <button className="bg-teal-700 text-white py-3 px-6 rounded-lg hover:bg-teal-900">Click Me</button>
      );
  }
  
  export default ActionButton;`,
    },
  },
  {
    name: "Switch buttons",
    image: `https://raw.githubusercontent.com/Bryanx/themed-toggle-button-group/master/demo-toggle-cards/assets/dark.gif?raw=true`,
    description: "This is the description for Component 7.",
    isPaid: true,
    tags: ["modal", "responsive modal", "popup", "dialog"],
    category: "Button",
    code: {
      htmlCss: `<!DOCTYPE html>
  <html>
  <head>
      <title>Component 7</title>
      <style>
          body {
              background-color: #f0f0f0;
              font-family: Arial, sans-serif;
          }
          .modal {
              display: none;
              position: fixed;
              z-index: 1;
              left: 0;
              top: 0;
              width: 100%;
              height: 100%;
              overflow: auto;
              background-color: rgb(0,0,0);
              background-color: rgba(0,0,0,0.4);
              padding-top: 60px;
          }
          .modal-content {
              background-color: #fefefe;
              margin: 5% auto;
              padding: 20px;
              border: 1px solid #888;
              width: 80%;
          }
          .close {
              color: #aaa;
              float: right;
              font-size: 28px;
              font-weight: bold;
          }
          .close:hover,
          .close:focus {
              color: black;
              text-decoration: none;
              cursor: pointer;
          }
      </style>
  </head>
  <body>
      <h2>Modal Example</h2>
      <button id="myBtn">Open Modal</button>
      <div id="myModal" class="modal">
          <div class="modal-content">
              <span class="close">&times;</span>
              <p>Some text in the Modal..</p>
          </div>
      </div>
      <script>
          var modal = document.getElementById("myModal");
          var btn = document.getElementById("myBtn");
          var span = document.getElementsByClassName("close")[0];
          btn.onclick = function() {
              modal.style.display = "block";
          }
          span.onclick = function() {
              modal.style.display = "none";
          }
          window.onclick = function(event) {
              if (event.target == modal) {
                  modal.style.display = "none";
              }
          }
      </script>
  </body>
  </html>`,
      reactCss: `import React, { useState } from 'react';
  import './Component7.css';
  
  function Modal() {
      const [isOpen, setIsOpen] = useState(false);
      return (
          <div>
              <button onClick={() => setIsOpen(true)} className="open-button">Open Modal</button>
              {isOpen && (
                  <div className="modal">
                      <div className="modal-content">
                          <span className="close" onClick={() => setIsOpen(false)}>&times;</span>
                          <p>Some text in the Modal..</p>
                      </div>
                  </div>
              )}
          </div>
      );
  }
  
  export default Modal;
  
  /* Component7.css */
  .modal {
      display: block;
      position: fixed;
      z-index: 1;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      overflow: auto;
      background-color: rgb(0,0,0);
      background-color: rgba(0,0,0,0.4);
      padding-top: 60px;
  }
  .modal-content {
      background-color: #fefefe;
      margin: 5% auto;
      padding: 20px;
      border: 1px solid #888;
      width: 80%;
  }
  .close {
      color: #aaa;
      float: right;
      font-size: 28px;
      font-weight: bold;
  }
  .close:hover,
  .close:focus {
      color: black;
      text-decoration: none;
      cursor: pointer;
  }`,
      reactTailwind: `import React, { useState } from 'react';
  
  function Modal() {
      const [isOpen, setIsOpen] = useState(false);
      return (
          <div>
              <button onClick={() => setIsOpen(true)} className="bg-blue-500 text-white py-2 px-4 rounded">Open Modal</button>
              {isOpen && (
                  <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
                      <div className="bg-white p-6 rounded-lg shadow-lg">
                          <span className="text-gray-700 text-2xl cursor-pointer" onClick={() => setIsOpen(false)}>&times;</span>
                          <p className="mt-4">Some text in the Modal..</p>
                      </div>
                  </div>
              )}
          </div>
      );
  }
  
  export default Modal;`,
    },
  },
  {
    name: "Form ",
    image: `https://support.skilljar.com/hc/article_attachments/360039096653`,
    description: "This is the description for Component 8.",
    isPaid: false,
    tags: ["form", "responsive form", "input", "user form"],
    category: "Form",
    code: {
      htmlCss: `<!DOCTYPE html>
  <html>
  <head>
      <title>Component 8</title>
      <style>
          body {
              background-color: #fafafa;
              font-family: Arial, sans-serif;
              display: flex;
              justify-content: center;
              align-items: center;
              height: 100vh;
          }
          .form-container {
              background-color: white;
              padding: 20px;
              border-radius: 8px;
              box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
          }
          .form-container input[type="text"], .form-container input[type="password"] {
              width: 100%;
              padding: 10px;
              margin: 10px 0;
              border: 1px solid #ccc;
              border-radius: 4px;
          }
          .form-container button {
              background-color: #28a745;
              color: white;
              padding: 10px 15px;
              border: none;
              border-radius: 4px;
              cursor: pointer;
          }
          .form-container button:hover {
              background-color: #218838;
          }
      </style>
  </head>
  <body>
      <div class="form-container">
          <form>
              <label for="username">Username:</label><br>
              <input type="text" id="username" name="username"><br>
              <label for="password">Password:</label><br>
              <input type="password" id="password" name="password"><br><br>
              <button type="submit">Submit</button>
          </form>
      </div>
  </body>
  </html>`,
      reactCss: `import React from 'react';
  import './Component8.css';
  
  function UserForm() {
      return (
          <div className="form-container">
              <form>
                  <label htmlFor="username">Username:</label><br />
                  <input type="text" id="username" name="username" /><br />
                  <label htmlFor="password">Password:</label><br />
                  <input type="password" id="password" name="password" /><br /><br />
                  <button type="submit">Submit</button>
              </form>
          </div>
      );
  }
  
  export default UserForm;
  
  /* Component8.css */
  .form-container {
      background-color: white;
      padding: 20px;
      border-radius: 8px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
  .form-container input[type="text"], .form-container input[type="password"] {
      width: 100%;
      padding: 10px;
      margin: 10px 0;
      border: 1px solid #ccc;
      border-radius: 4px;
  }
  .form-container button {
      background-color: #28a745;
      color: white;
      padding: 10px 15px;
      border: none;
      border-radius: 4px;
      cursor: pointer;
  }
  .form-container button:hover {
      background-color: #218838;
  }`,
      reactTailwind: `import React from 'react';
  
  function UserForm() {
      return (
          <div className="bg-white p-6 rounded-lg shadow-lg">
              <form>
                  <label htmlFor="username" className="block text-gray-700">Username:</label>
                  <input type="text" id="username" name="username" className="w-full p-2 border border-gray-300 rounded mt-2" />
                  
                  <label htmlFor="password" className="block text-gray-700 mt-4">Password:</label>
                  <input type="password" id="password" name="password" className="w-full p-2 border border-gray-300 rounded mt-2" />
                  
                  <button type="submit" className="bg-green-500 text-white py-2 px-4 rounded mt-4 hover:bg-green-700">Submit</button>
              </form>
          </div>
      );
  }
  
  export default UserForm;`,
    },
  },
  {
    name: "Closable Sidebar",
    image: `https://i.pinimg.com/originals/bf/62/7a/bf627a281ea640b0bb0900acec4138f3.gif`,
    description: "This is the description for Component 9.",
    isPaid: false,
    tags: ["sidebar", "responsive sidebar", "closable sidebar", "openable sidebar"],
    category: "Sidebar",
    code: {
      htmlCss: `<!DOCTYPE html>
  <html>
  <head>
      <title>Component 9</title>
      <style>
          body {
              background-color: #f7f7f7;
              font-family: Arial, sans-serif;
              display: flex;
              justify-content: center;
              align-items: center;
              height: 100vh;
          }
          .tooltip {
              position: relative;
              display: inline-block;
          }
          .tooltip .tooltiptext {
              visibility: hidden;
              width: 120px;
              background-color: #555;
              color: #fff;
              text-align: center;
              border-radius: 6px;
              padding: 5px 0;
              position: absolute;
              z-index: 1;
              bottom: 125%; 
              left: 50%;
              margin-left: -60px;
              opacity: 0;
              transition: opacity 0.3s;
          }
          .tooltip:hover .tooltiptext {
              visibility: visible;
              opacity: 1;
          }
      </style>
  </head>
  <body>
      <div class="tooltip">Hover over me
          <span class="tooltiptext">Tooltip text</span>
      </div>
  </body>
  </html>`,
      reactCss: `import React from 'react';
  import './Component9.css';
  
  function Tooltip() {
      return (
          <div className="tooltip">Hover over me
              <span className="tooltiptext">Tooltip text</span>
          </div>
      );
  }
  
  export default Tooltip;
  
  /* Component9.css */
  .tooltip {
      position: relative;
      display: inline-block;
  }
  .tooltip .tooltiptext {
      visibility: hidden;
      width: 120px;
      background-color: #555;
      color: #fff;
      text-align: center;
      border-radius: 6px;
      padding: 5px 0;
      position: absolute;
      z-index: 1;
      bottom: 125%; 
      left: 50%;
      margin-left: -60px;
      opacity: 0;
      transition: opacity 0.3s;
  }
  .tooltip:hover .tooltiptext {
      visibility: visible;
      opacity: 1;
  }`,
      reactTailwind: `import React from 'react';
  
  function Tooltip() {
      return (
          <div className="relative inline-block">
              Hover over me
              <span className="absolute left-1/2 bottom-full transform -translate-x-1/2 bg-gray-700 text-white text-center rounded py-1 px-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Tooltip text
              </span>
          </div>
      );
  }
  
  export default Tooltip;`,
    },
  },
  {
    name: "Coloured Product Card",
    image: `https://i.pinimg.com/originals/cf/f9/59/cff959b62c9741a94bb20c9fdac1d0bc.gif`,
    description: "This is the description for Component 10.",
    isPaid: true,
    tags: ["card", "responsive card", "product", "coloured"],
    category: "card",
    code: {
      htmlCss: `<!DOCTYPE html>
  <html>
  <head>
      <title>Component 10</title>
      <style>
          body {
              background-color: #f0f0f0;
              font-family: Arial, sans-serif;
              display: flex;
              justify-content: center;
              align-items: center;
              height: 100vh;
          }
          .accordion {
              width: 100%;
              max-width: 600px;
              background-color: #fff;
              border: 1px solid #ddd;
              border-radius: 4px;
          }
          .accordion-item {
              border-bottom: 1px solid #ddd;
          }
          .accordion-item:last-child {
              border-bottom: none;
          }
          .accordion-title {
              background-color: #f7f7f7;
              padding: 15px;
              cursor: pointer;
              font-weight: bold;
              border-radius: 4px;
          }
          .accordion-content {
              display: none;
              padding: 15px;
          }
          .accordion-content p {
              margin: 0;
          }
      </style>
  </head>
  <body>
      <div class="accordion">
          <div class="accordion-item">
              <div class="accordion-title">Section 1</div>
              <div class="accordion-content">
                  <p>This is the content of Section 1.</p>
              </div>
          </div>
          <div class="accordion-item">
              <div class="accordion-title">Section 2</div>
              <div class="accordion-content">
                  <p>This is the content of Section 2.</p>
              </div>
          </div>
          <div class="accordion-item">
              <div class="accordion-title">Section 3</div>
              <div class="accordion-content">
                  <p>This is the content of Section 3.</p>
              </div>
          </div>
      </div>
      <script>
          document.querySelectorAll('.accordion-title').forEach(item => {
              item.addEventListener('click', () => {
                  const content = item.nextElementSibling;
                  content.style.display = content.style.display === 'block' ? 'none' : 'block';
              });
          });
      </script>
  </body>
  </html>`,
      reactCss: `import React, { useState } from 'react';
  import './Component10.css';
  
  function Accordion() {
      const [activeIndex, setActiveIndex] = useState(null);
      
      const handleClick = index => {
          setActiveIndex(activeIndex === index ? null : index);
      };
      
      return (
          <div className="accordion">
              <div className="accordion-item">
                  <div className="accordion-title" onClick={() => handleClick(0)}>Section 1</div>
                  {activeIndex === 0 && <div className="accordion-content"><p>This is the content of Section 1.</p></div>}
              </div>
              <div className="accordion-item">
                  <div className="accordion-title" onClick={() => handleClick(1)}>Section 2</div>
                  {activeIndex === 1 && <div className="accordion-content"><p>This is the content of Section 2.</p></div>}
              </div>
              <div className="accordion-item">
                  <div className="accordion-title" onClick={() => handleClick(2)}>Section 3</div>
                  {activeIndex === 2 && <div className="accordion-content"><p>This is the content of Section 3.</p></div>}
              </div>
          </div>
      );
  }
  
  export default Accordion;
  
  /* Component10.css */
  .accordion {
      width: 100%;
      max-width: 600px;
      background-color: #fff;
      border: 1px solid #ddd;
      border-radius: 4px;
  }
  .accordion-item {
      border-bottom: 1px solid #ddd;
  }
  .accordion-item:last-child {
      border-bottom: none;
  }
  .accordion-title {
      background-color: #f7f7f7;
      padding: 15px;
      cursor: pointer;
      font-weight: bold;
      border-radius: 4px;
  }
  .accordion-content {
      display: none;
      padding: 15px;
  }
  .accordion-content p {
      margin: 0;
  }`,
      reactTailwind: `import React, { useState } from 'react';
  
  function Accordion() {
      const [activeIndex, setActiveIndex] = useState(null);
  
      const handleClick = index => {
          setActiveIndex(activeIndex === index ? null : index);
      };
  
      return (
          <div className="w-full max-w-xl mx-auto bg-white shadow-lg rounded-lg">
              <div className="accordion-item border-b">
                  <div className="accordion-title bg-gray-100 p-4 cursor-pointer font-bold rounded" onClick={() => handleClick(0)}>Section 1</div>
                  {activeIndex === 0 && <div className="accordion-content p-4"><p>This is the content of Section 1.</p></div>}
              </div>
              <div className="accordion-item border-b">
                  <div className="accordion-title bg-gray-100 p-4 cursor-pointer font-bold rounded" onClick={() => handleClick(1)}>Section 2</div>
                  {activeIndex === 1 && <div className="accordion-content p-4"><p>This is the content of Section 2.</p></div>}
              </div>
              <div className="accordion-item">
                  <div className="accordion-title bg-gray-100 p-4 cursor-pointer font-bold rounded" onClick={() => handleClick(2)}>Section 3</div>
                  {activeIndex === 2 && <div className="accordion-content p-4"><p>This is the content of Section 3.</p></div>}
              </div>
          </div>
      );
  }
  
  export default Accordion;`,
    },
  },
  {
    name: "Sidebar with Search Bar",
    image: `https://i.imgur.com/4dXhYpU.gif`,
    description: "This is the description for Component 11.",
    isPaid: false,
    tags: ["sidebar", "sidebar carousel", "slider sidebar", "search sidebar"],
    category: "Sidebar",
    code: {
      htmlCss: `<!DOCTYPE html>
  <html>
  <head>
      <title>Component 11</title>
      <style>
          body {
              background-color: #e0e0e0;
              font-family: Arial, sans-serif;
              display: flex;
              justify-content: center;
              align-items: center;
              height: 100vh;
          }
          .carousel {
              width: 70%;
              overflow: hidden;
              border-radius: 10px;
              box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
          }
          .carousel img {
              width: 100%;
              transition: transform 0.5s ease-in-out;
          }
          .carousel-buttons {
              text-align: center;
              margin-top: 10px;
          }
          .carousel-buttons button {
              background-color: #007bff;
              color: white;
              border: none;
              padding: 10px;
              margin: 0 5px;
              cursor: pointer;
              border-radius: 4px;
          }
          .carousel-buttons button:hover {
              background-color: #0056b3;
          }
      </style>
  </head>
  <body>
      <div class="carousel">
          <img src="https://via.placeholder.com/800x400?text=Image+1" alt="Image 1">
          <img src="https://via.placeholder.com/800x400?text=Image+2" alt="Image 2" style="display:none;">
          <img src="https://via.placeholder.com/800x400?text=Image+3" alt="Image 3" style="display:none;">
      </div>
      <div class="carousel-buttons">
          <button onclick="showImage(0)">1</button>
          <button onclick="showImage(1)">2</button>
          <button onclick="showImage(2)">3</button>
      </div>
      <script>
          let currentIndex = 0;
          const images = document.querySelectorAll('.carousel img');
  
          function showImage(index) {
              images[currentIndex].style.display = 'none';
              currentIndex = index;
              images[currentIndex].style.display = 'block';
          }
      </script>
  </body>
  </html>`,
      reactCss: `import React, { useState } from 'react';
  import './Component11.css';
  
  function Carousel() {
      const [currentIndex, setCurrentIndex] = useState(0);
      const images = [
          "https://via.placeholder.com/800x400?text=Image+1",
          "https://via.placeholder.com/800x400?text=Image+2",
          "https://via.placeholder.com/800x400?text=Image+3"
      ];
  
      const showImage = index => {
          setCurrentIndex(index);
      };
  
      return (
          <div>
              <div className="carousel">
                  {images.map((img, index) => (
                      <img key={index} src={img}  style={{ display: currentIndex === index ? 'block' : 'none' }} />
                  ))}
              </div>
              <div className="carousel-buttons">
                  {images.map((_, index) => (
                      <button key={index} onClick={() => showImage(index)}>{index + 1}</button>
                  ))}
              </div>
          </div>
      );
  }
  
  export default Carousel;
  
  /* Component11.css */
  .carousel {
      width: 70%;
      overflow: hidden;
      border-radius: 10px;
      box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
  }
  .carousel img {
      width: 100%;
      transition: transform 0.5s ease-in-out;
  }
  .carousel-buttons {
      text-align: center;
      margin-top: 10px;
  }
  .carousel-buttons button {
      background-color: #007bff;
      color: white;
      border: none;
      padding: 10px;
      margin: 0 5px;
      cursor: pointer;
      border-radius: 4px;
  }
  .carousel-buttons button:hover {
      background-color: #0056b3;
  }`,
      reactTailwind: `import React, { useState } from 'react';
  
  function Carousel() {
      const [currentIndex, setCurrentIndex] = useState(0);
      const images = [
          "https://via.placeholder.com/800x400?text=Image+1",
          "https://via.placeholder.com/800x400?text=Image+2",
          "https://via.placeholder.com/800x400?text=Image+3"
      ];
  
      const showImage = index => {
          setCurrentIndex(index);
      };
  
      return (
          <div className="w-full max-w-3xl mx-auto">
              <div className="carousel overflow-hidden rounded-lg shadow-lg">
                  {images.map((img, index) => (
                      <img key={index} src={img} alt={sample} className="block" />
                  ))}
              </div>
              <div className="carousel-buttons text-center mt-4">
                  {images.map((_, index) => (
                      <button key={index} onClick={() => showImage(index)} className="bg-blue-500 text-white py-2 px-4 m-1 rounded hover:bg-blue-700">
                          {index + 1}
                      </button>
                  ))}
              </div>
          </div>
      );
  }
  
  export default Carousel;`,
    },
  },
  {
    name: "Signup Form",
    image: "https://miro.medium.com/v2/resize:fit:1400/0*_2tRD37MAGbmi48q.gif",
    description:
      "This component provides a customizable banner for displaying important messages or announcements.",
    isPaid: false,
    tags: ["signup", "form", "signin", "design"],
    category: "Form",
    code: {
      htmlCss: `<!DOCTYPE html>
<html>
<head>
    <title>Component 15 - Banner</title>
    <style>
        /* Styles for the banner component */
    </style>
</head>
<body>
    <!-- HTML markup for the banner component -->
</body>
</html>`,
      reactCss: `import React from 'react';
import './Component15.css';

function Banner() {
    return (
        <div className="banner">
            {/* Content for the banner component */}
        </div>
    );
}

export default Banner;

/* Component15.css */
.banner {
    /* CSS styles for the banner component */
}`,
      reactTailwind: `import React from 'react';

function Banner() {
    return (
        <div className="bg-blue-500 text-white p-4">
            {/* Content for the banner component */}
        </div>
    );
}

export default Banner;`,
    },
  },
  {
    name: "Carousel With text",
    image: "https://cdn.dribbble.com/users/1640722/screenshots/5209344/preview.gif",
    description:
      "A versatile button component that can be styled and configured for various interactions.",
    isPaid: true,
    tags: ["Carousel", "slidable", "text carousel"],
    category: "Carousel",
    code: {
      htmlCss: `<!DOCTYPE html>
<html>
<head>
    <title>Component 16 - Button</title>
    <style>
        /* Styles for the button component */
    </style>
</head>
<body>
    <!-- HTML markup for the button component -->
</body>
</html>`,
      reactCss: `import React from 'react';
import './Component16.css';

function Button() {
    return (
        <button className="button">
            {/* Content for the button component */}
        </button>
    );
}

export default Button;

/* Component16.css */
.button {
    /* CSS styles for the button component */
}`,
      reactTailwind: `import React from 'react';

function Button() {
    return (
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            {/* Content for the button component */}
        </button>
    );
}

export default Button;`,
    },
  },
  {
    name: "Auto Sliding Carousel",
    image: "https://cdn.dribbble.com/users/1233499/screenshots/5048198/mearged1.gif",
    description:
      "An interactive component allowing users to select dates and times easily.",
    isPaid: false,
    tags: ["Carousel", "slidable", "text carousel"],
    category: "Carousel",
    code: {
      htmlCss: `<!DOCTYPE html>
<html>
<head>
    <title>Component 17 - Date Time Picker</title>
    <style>
        /* Styles for the date time picker component */
    </style>
</head>
<body>
    <!-- HTML markup for the date time picker component -->
</body>
</html>`,
      reactCss: `import React from 'react';
import './Component17.css';

function DateTimePicker() {
    return (
        <div className="date-time-picker">
            {/* Content for the date time picker component */}
        </div>
    );
}

export default DateTimePicker;

/* Component17.css */
.date-time-picker {
    /* CSS styles for the date time picker component */
}`,
      reactTailwind: `import React from 'react';

function DateTimePicker() {
    return (
        <div className="flex items-center border-b border-b-2 border-teal-500 py-2">
            {/* Content for the date time picker component */}
        </div>
    );
}

export default DateTimePicker;`,
    },
  },
  {
    name: "Notification Popup",
    image: "https://i.pinimg.com/originals/e9/97/9e/e9979e99811dd1a8e82d74a231ff4506.gif",
    description:
      "A modal dialog box for displaying important information, alerts, or user interactions.",
    isPaid: true,
    tags: ["popup", "notification popup", "notification icon", "alert"],
    category: "Popup",
    code: {
      htmlCss: `<!DOCTYPE html>
<html>
<head>
    <title>Component 18 - Dialog Box</title>
    <style>
        /* Styles for the dialog box component */
    </style>
</head>
<body>
    <!-- HTML markup for the dialog box component -->
</body>
</html>`,
      reactCss: `import React from 'react';
import './Component18.css';

function DialogBox() {
    return (
        <div className="dialog-box">
            {/* Content for the dialog box component */}
        </div>
    );
}

export default DialogBox;

/* Component18.css */
.dialog-box {
    /* CSS styles for the dialog box component */
}`,
      reactTailwind: `import React from 'react';

function DialogBox() {
    return (
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            {/* Content for the dialog box component */}
        </div>
    );
}

export default DialogBox;`,
    },
  },
  {
    name: "Image Gallery Carousel",
    image: "https://cdn.dribbble.com/users/409677/screenshots/3570081/ezgif.com-optimize.gif",
    description:
      "A component to display a gallery of images with options for customization and interaction.",
    isPaid: false,
    tags: ["popup", "designer popup", "profile pop", "closable popup"],
    category: "Carousel",
    code: {
      htmlCss: `<!DOCTYPE html>
  <html>
  <head>
      <title>Component 19 - Image Gallery</title>
      <style>
          /* Styles for the image gallery component */
      </style>
  </head>
  <body>
      <!-- HTML markup for the image gallery component -->
  </body>
  </html>`,
      reactCss: `import React from 'react';
  import './Component19.css';
  
  function ImageGallery() {
      return (
          <div className="image-gallery">
              {/* Content for the image gallery component */}
          </div>
      );
  }
  
  export default ImageGallery;
  
  /* Component19.css */
  .image-gallery {
      /* CSS styles for the image gallery component */
  }`,
      reactTailwind: `import React from 'react';
  
  function ImageGallery() {
      return (
          <div className="grid grid-cols-3 gap-4">
              {/* Content for the image gallery component */}
          </div>
      );
  }
  
  export default ImageGallery;`,
    },
  },
  {
    name: "Gallery",
    image: "https://www.balbooa.com/images/blog/gridbox/2-2-7/intro.gif",
    description:
      "A flexible input component for forms with support for various input types and validations.",
    isPaid: true,
    tags: ["gallery", "images", "openable gallery", "closable gallery"],
    category: "Gallery",
    code: {
      htmlCss: `<!DOCTYPE html>
  <html>
  <head>
      <title>Component 20 - Form Input</title>
      <style>
          /* Styles for the form input component */
      </style>
  </head>
  <body>
      <!-- HTML markup for the form input component -->
  </body>
  </html>`,
      reactCss: `import React from 'react';
  import './Component20.css';
  
  function FormInput() {
      return (
          <input type="text" className="form-input" />
      );
  }
  
  export default FormInput;
  
  /* Component20.css */
  .form-input {
      /* CSS styles for the form input component */
  }`,
      reactTailwind: `import React from 'react';
  
  function FormInput() {
      return (
          <input type="text" className="border rounded py-2 px-3 focus:outline-none focus:border-blue-400" />
      );
  }
  
  export default FormInput;`,
    },
  },
  {
    name: "Multiple Image Gallery",
    image: "https://media.geeksforgeeks.org/wp-content/uploads/20240313113658/imagegallery_output.gif",
    description:
      "A customizable dropdown menu component for navigation or selecting options.",
    isPaid: false,
    tags: ["gallery", "images", "openable gallery", "closable gallery"],
    category: "Gallery",
    code: {
      htmlCss: `<!DOCTYPE html>
  <html>
  <head>
      <title>Component 21 - Dropdown Menu</title>
      <style>
          /* Styles for the dropdown menu component */
      </style>
  </head>
  <body>
      <!-- HTML markup for the dropdown menu component -->
  </body>
  </html>`,
      reactCss: `import React from 'react';
  import './Component21.css';
  
  function DropdownMenu() {
      return (
          <div className="dropdown-menu">
              {/* Content for the dropdown menu component */}
          </div>
      );
  }
  
  export default DropdownMenu;
  
  /* Component21.css */
  .dropdown-menu {
      /* CSS styles for the dropdown menu component */
  }`,
      reactTailwind: `import React from 'react';
  
  function DropdownMenu() {
      return (
          <div className="relative">
              {/* Content for the dropdown menu component */}
          </div>
      );
  }
  
  export default DropdownMenu;`,
    },
  },
  {
    name: "Moving Gallery",
    image: "https://uploads-ssl.webflow.com/6167f64186e44bac0b08c776/61680878e336433196a7e965_Custom%20Slider%20Autoplay%20Gallery%20Animation%20teaser-2.gif",
    description:
      "A card component for displaying content with an optional image, title, and description.",
    isPaid: true,
    tags: ["gallery", "images", "openable gallery", "closable gallery"],
    category: "Gallery",
    code: {
      htmlCss: `<!DOCTYPE html>
  <html>
  <head>
      <title>Component 22 - Card</title>
      <style>
          /* Styles for the card component */
      </style>
  </head>
  <body>
      <!-- HTML markup for the card component -->
  </body>
  </html>`,
      reactCss: `import React from 'react';
  import './Component22.css';
  
  function Card() {
      return (
          <div className="card">
              {/* Content for the card component */}
          </div>
      );
  }
  
  export default Card;
  
  /* Component22.css */
  .card {
      /* CSS styles for the card component */
  }`,
      reactTailwind: `import React from 'react';
  
  function Card() {
      return (
          <div className="bg-white rounded-lg shadow-md p-4">
              {/* Content for the card component */}
          </div>
      );
  }
  
  export default Card;`,
    },
  },
  {
    name: "Popup with image",
    image: "https://i.pinimg.com/originals/9f/60/c5/9f60c5d0502474a0e37829bcc4109796.gif",
    description:
      "A tabbed navigation component for organizing content into multiple sections.",
    isPaid: false,
    tags: ["popup", "designer popup", "profile pop", "closable popup"],
    category: "popup",
    code: {
      htmlCss: `<!DOCTYPE html>
  <html>
  <head>
      <title>Component 23 - Tabs</title>
      <style>
          /* Styles for the tabs component */
      </style>
  </head>
  <body>
      <!-- HTML markup for the tabs component -->
  </body>
  </html>`,
      reactCss: `import React from 'react';
  import './Component23.css';
  
  function Tabs() {
      return (
          <div className="tabs">
              {/* Content for the tabs component */}
          </div>
      );
  }
  
  export default Tabs;
  
  /* Component23.css */
  .tabs {
      /* CSS styles for the tabs component */
  }`,
      reactTailwind: `import React from 'react';
  
  function Tabs() {
      return (
          <div className="border-b border-gray-200">
              {/* Content for the tabs component */}
          </div>
      );
  }
  
  export default Tabs;`,
    },
  },
  {
    name: "Button groups",
    image: "https://blogs.purecode.ai/blogs/wp-content/uploads/2023/11/5f8e8e3d0ac9ecd9822b6b823ef761bf.gif",
    description:
      "A component that provides contextual information or hints when hovering over an element.",
    isPaid: true,
    tags: ["buttons", "responsive button", "action button", "clickable", "group buttons"],
    category: "Buttons",
    code: {
      htmlCss: `<!DOCTYPE html>
  <html>
  <head>
      <title>Component 24 - Tooltip</title>
      <style>
          /* Styles for the tooltip component */
      </style>
  </head>
  <body>
      <!-- HTML markup for the tooltip component -->
  </body>
  </html>`,
      reactCss: `import React from 'react';
  import './Component24.css';
  
  function Tooltip() {
      return (
          <div className="tooltip">
              {/* Content for the tooltip component */}
          </div>
      );
  }
  
  export default Tooltip;
  
  /* Component24.css */
  .tooltip {
      /* CSS styles for the tooltip component */
  }`,
      reactTailwind: `import React from 'react';
  
  function Tooltip() {
      return (
          <div className="relative">
              {/* Content for the tooltip component */}
          </div>
      );
  }
  
  export default Tooltip;`,
    },
  },
  
];

export default componentsData;
